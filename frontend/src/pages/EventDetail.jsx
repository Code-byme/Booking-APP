import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EventDetail() {
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }
  const routeParams = useParams();
  const [event, setEvent] = useState();
  const getEvent = async () => {
    const response = await fetch(
      `https://backend-szh0.onrender.com/ticket/?url=http://35.163.82.245:8081/events/details/${routeParams.id}`
    );
    const data = await response.json();
    setEvent(data.event);
  };
  useEffect(() => {
    getEvent();
  }, []);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text-base leading-relaxed">
        {isReadMore ? text.slice(0, 500) : text}
        <span onClick={toggleReadMore} className="text-blue-500 cursor-pointer">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  if (event) {
    return (
      <div className="lg:flex justify-center ml-[120px]">
        <div className="p-11">
          <div className="flex flex-col  bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
            <div className="flex flex-col w- md:flex-row">
              <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-200 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <div className="md:text-3xl">
                  {event.event_date_format.split(" ")[0]}
                </div>
                <div className="md:text-6xl">
                  {event.event_date_format.split(" ")[2]}
                </div>
                <div className="md:text-xl">
                  {event.event_date_format.split(" ")[1]}
                </div>
              </div>
              <div className="p-4 font-normal text-gray-800 md:w-3/4">
                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                  {event.title}
                </h1>
                <img className="" src={event.image} alt="" />
                <h2 class="text-2xl font-bold mb-2 mt-2">Description:</h2>
                <ReadMore>{removeTags(event.description)}</ReadMore>
                <div className="w-1/2 flex justify-end"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-11 absolute ml-[700px]">
          <a
            href="#"
            className=" block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {event.theater_location}
            </h5>
            <span>
              {event.city}-{event.country}
            </span>
            <p class="font-normal text-gray-700 ">
              Heure {event.open_at}
            </p>
          </a>
          <div className="mt-3">
            <div class="flex justify-center shadow border-gray-200 rounded-lg">
              <div class="block w-full rounded-lg bg-white text-center shadow-md ">
                
                <div class="p-6 mt-5">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                    {event.price} Dhs
                  </h5>
                  
                  <button
                    type="button"
                    class="inline-block bg-yellow-500 w-2/3 rounded bg-primary px-6 pt-2.5 pb-2 text-white font-sans uppercase leading-normal   transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Acheter
                  </button>
                </div>
                <div class="border-t-2 border-neutral-100 py-3 px-6">
                  {/* facebook twitter */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetail;
