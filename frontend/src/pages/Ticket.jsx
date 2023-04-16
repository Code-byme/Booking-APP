import React, { useContext, useEffect, useState } from "react";
import { AiOutlineScissor } from "react-icons/ai";
import { GiTicket } from "react-icons/gi";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";


function Ticket() {
  const [event, setEvent] = useState([]);
  const { user } = useContext(AuthContext);
  const getEvent = async () => {
    try {
      const response = await axios.get(`https://backend-szh0.onrender.com/api/cart?username=${user.username}`);
      setEvent(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };   
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <div>
      {event.map(item => {
        return (
<div className="bg-slate-200 h-full">
         <div className="bg-white w-[60%] mx-auto h-full">
           <div className="flex justify-between bg-gray-900 text-white p-5">
             <img src="//www.ticket.ma/img/logo.png" className="w-20 " alt="" />
             <button className="font-semibold text-gray-300 hover:text-white">
               Dowload
             </button>
           </div>
           <div className="font-bold text-2xl p-6">
             <h2>Invoice</h2>
           </div>
           
           <div className="flex justify-between text-gray-500">
             <p className="ml-6 leading-7">
               Invoice to Amine <br />
               140 St Kilda Rd <br />
               Melbourne, Victoria <br />
               3000, Australia <br />
             </p>
             <p className="mr-28 leading-7">
               Invoice ID: YCCURW-00000 <br />
               Order Date : 15/04/2023
               <br />
               Near Area Mall <br />
             </p>
           </div>
   
           <div className="relative overflow-x-auto mt-20">
             <table className="w-full text-sm text-left text-gray-500 ">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                 <tr>
                   <th scope="col" className="px-6 py-3">
                     #
                   </th>
                   <th scope="col" className="px-6 py-3">
                     Event Details
                   </th>
                   <th scope="col" className="px-6 py-3">
                     Type
                   </th>
                   <th scope="col" className="px-6 py-3">
                     Quantity
                   </th>
                   <th scope="col" className="px-6 py-3">
                     Total
                   </th>
                 </tr>
               </thead>
               <tbody>
                  <tr className="bg-white border-b">
                   <th
                     scope="row"
                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                   >
                     1
                   </th>
                   <th
                     scope="row"
                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                   >
                     {item.event}
                   </th>
                   <td className="px-6 py-4">{item.category}</td>
                   <td className="px-6 py-4">{item.quantity}</td>
                   <td className="px-6 py-4">{item.price} Dhs</td>
                 </tr>
               </tbody>
             </table>
             <div className="p-6 border ">
               <h2 className="flex justify-end text-xl font-semibold">
                 Invoice Total : {item.price} Dhs
               </h2>
               <p className="flex justify-end text-gray-600 text-sm">
                 Paid via Credit Card
               </p>
             </div>
           </div>
           <div className="inline-flex items-center w-[95%]">
             <hr className="w-full h-[1px]   border-dashed border-black	 " />
             <div className="absolute px-4  bg-white ">
               <AiOutlineScissor className="text-lg   text-gray-600" />
             </div>
           </div>
           <div className="border mt-4 w-[90%] h-72 mx-auto flex justify-between">
             <div className="flex p-3">
               <div>
                 <img src={item.imgEvent} className="w-32 " alt="" />
               </div>
               <div className="leading-8 ml-7">
                 <h5 className="text-lg font-semibold">
                   {item.event}
                 </h5>
                 <span className="text-gray-600 text-sm">
                 {item.dateOfEvent.split(" ").slice(0, 3).join(" ") +
                    " " +
                    item.dateOfEvent.split(" ")[
                      item.dateOfEvent.split(" ").length - 1
                    ]}
                 </span> <br />
                 <span className="text-gray-600 text-sm">
                  {item.openAt}
                 </span>
                 <p className="font-semibold">{user.username}</p>
                 <div className="flex">
                   <GiTicket className="mt-2 mr-2" />1 x Ticket
                 </div>
                 <p>Total : {item.price} Dhs</p>
               </div>
             </div>
             <div className="bg-slate-100 h-72  w-[40%] leading-9">
               <ul className="p-5 flex flex-col items-center">
                 <li className="font-semibold">Online</li>
                 <li>Counter</li>
                 <li className="font-semibold">0000000001</li>
               </ul>
               <div className="w-24 mx-auto bg-white  ">
                 <img src="/qr.png" alt="QR-Ticket-Scanner" />
               </div>
               <p className="text-sm text-center text-gray-600">
                 Powered by Ticket
               </p>
             </div>
           </div>
           <div className="inline-flex items-center w-[95%]">
             <hr className="w-full h-[1px]   border-dashed border-black	 " />
             <div className="absolute px-4  bg-white">
               <AiOutlineScissor className="text-lg   text-gray-600" />
             </div>
           </div>
         </div>
       </div>   
        )
      })}
      
    </div>
  );
}

export default Ticket;