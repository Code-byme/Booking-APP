import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";


function Listings() {
  const [events, setEvents] = useState([]);
  const routeParams = useParams();
  console.log(routeParams);
  useEffect(() => {
    getEvent();
  }, []);
  const getEvent = async () => {
    const response = await fetch(
      `https://backend-szh0.onrender.com/ticket/?url=http://35.163.82.245:8081/events/list/last/30/${routeParams.id}`
    );
    const data = await response.json();
    setEvents(data.list);
  };
  console.log(events);
  return (
    <div>
      <div className=" py-4"></div>
      <div className="max-w-screen-lg grid grid-cols-1 gap-6 text-center mx-auto w-2/3 lg:grid-cols-3 ">
        {events.map((event) => {
          return <Card event={event} />;
        })}
      </div>
    </div>
  );
}

export default Listings;
