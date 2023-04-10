import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { CountContext } from "../context/CountContext";

function Carts() {
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState([]);
  const [total, setTotal] = useState(0);
  const {count, setCount} = useContext(CountContext)
  const getEvent = async () => {
    try {
      const response = await axios.get(`https://backend-szh0.onrender.com/api/cart?username=${user.username}`);
      setEvent(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }; 

  function totalCal(){
    if (event.length === 0) {
      setTotal(0)
    }
  
    let totalValue = 0;
  
    event.forEach((item) => {
      totalValue += item.quantity * item.price;
    });
    setTotal(totalValue);
  }
  
  useEffect(() => {
    getEvent();
  }, []);
  
  useEffect(() => {
    console.log(event,"tottaaaaal");
    totalCal();
  }, [event]);
  

  const removeCartItem = async (eventId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/cart?username=${user.username}&eventId=${eventId}`
      );
      setCount(count - 1)
      getEvent();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div className="lg:w-[60%] border mx-auto my-5 px-[25px] py-[15px] border-solid border-[#ddd]">
      {event.map((item) => (
        <div className="mt-10">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="w-full lg:w-auto">
              <img
                className="w-full lg:w-[165px] h-[110px]"
                src={item.imgEvent}
                alt=""
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full  mt-4 lg:mt-0">
              <div className="ml-0 lg:ml-6">
                <h2 className="font-bold ">{item.event}</h2>
                <p>
                  {item.dateOfEvent.split(" ").slice(0, 3).join(" ") +
                    " " +
                    item.dateOfEvent.split(" ")[
                      item.dateOfEvent.split(" ").length - 1
                    ]}
                </p>
                {/* to be changed */}
                <p>Ouverture des portes : {item.openAt}</p>
                <p>Heure du spectacle : {item.openAt}</p>
              </div>
              <div className="border border-solid-[#ddd] lg:ml-14 w-full lg:w-[40%] mt-4 lg:mt-0">
                <div className="border border-solid h-[40px] flex justify-between items-center bg-slate-100">
                  <span className="p-2 font-bold">Tickets</span>
                  <button
                    onClick={() => removeCartItem(item.eventId)}
                    className="p-1 text-xs text-red-600 font-semibold"
                  >
                    Supprimer
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="p-2">
                    <p className="text-sm font-semibold">
                      {item.quantity} Ticket
                    </p>
                    <span className="text-xs">
                      {item.quantity}x {item.price} Dhs
                    </span>
                  </div>
                  <p className="p-2 font-semibold">{item.price} Dhs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-slate-100 h-[100px] mt-4 lg:mt-20 flex justify-between p-9">
        <h2 className="text-lg font-normal">TOTAL à payer</h2>
        <p className="font-semibold">{total} Dhs</p>
      </div>
      <div className="flex">
      <button class="bg-yellow-500 hover:bg-yellow-700 text-white  mt-4 font-bold py-2 px-10 rounded mx-auto">
        Confirm Order
      </button>
      </div>
    </div>
  );
}

export default Carts;
