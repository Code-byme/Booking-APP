import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Orders() {
    const {user} = useContext(AuthContext)
    const [event, setEvent] = useState([])
    const getEvent = async () => {
        try {
          const response = await axios.get(`https://backend-szh0.onrender.com/api/order?username=${user.username}`);
          setEvent(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }; 
      useEffect(() => {
        getEvent();
      }, []);
      console.log(event)

  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-700 text-center p-8'>My Orders</h1>
      {event.map((e, index) => (
       <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden m-2 flex flex-col sm:flex-row w-2/3 mx-auto">
       <img className="w-full sm:w-1/4 h-auto p-2" src={e.imgEvent} alt="event" />
       <div className="flex-grow py-4 px-6">
         <div className="flex justify-between items-center mb-2">
           <h2 className="lg:text-xl font-bold">{e.event}</h2>
           <Link to={`/ticket/${e.eventId}`} className="bg-yellow-500 hover:bg-yellow-700 text-white  lg:flex-shrink-0  lg:font-semibold lg:py-2 lg:px-8 rounded">
             View Ticket
           </Link>
         </div>
         <p className="text-gray-600 text-sm">{e.dateOfEvent}</p>
       </div>
     </div>
     
      ))}
    </div>
  )
}

export default Orders