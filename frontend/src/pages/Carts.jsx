import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Carts() {
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState([]);
  const getEvent = async () => {
    axios
      .get(`https://backend-szh0.onrender.com/api/cart?username=${user.username}`)
      .then((response) => {
        setEvent(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getEvent();
  }, []);

  // return (
  //   <div>
  //     <div className="flex items-center justify-center py-8"></div>
  //     <div className="" id="chec-div">
  //       <div className="w-full flex justify-center " id="checkout">
  //         <div className="flex flex-col lg:flex-row  " id="cart">
  //           <div
  //             className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-gray-100 overflow-y-hidden overflow-x-hidden "
  //             id="scroll"
  //           >
  //             {event.map((e)=>{
  //               return (
  //                 <div key={e.id} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
  //               <div className="md:w-4/12 2xl:w-1/4 w-full">
  //                 <img
  //                   src={e.imgEvent}
  //                   alt=""
  //                   className=" object-center object-cover md:block hidden rounded-lg"
  //                 />
  //                 <img
  //                   src={e.imgEvent}
  //                   alt=""
  //                   className="md:hidden w-full  object-center object-cover"
  //                 />
  //               </div>
  //               <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
  //                 <div className="flex items-center  w-full pt-1">
  //                   <p className="text-base font-black leading-none text-gray-800 ">
  //                     {e.event}
  //                   </p>
  //                 </div>
  //                 {/* <p className="text-xs leading-3 text-gray-600  pt-2">
  //                   {formattedDate}
  //                 </p> */}
  //                 <p className="text-xs leading-3 text-gray-600  py-4">
  //                   {e.quantity}
  //                 </p>
  //                 <p className="w-96 text-xs leading-3 text-gray-600 ">
  //                   {e.category}
  //                 </p>
  //                 <div className="flex justify-end pt-5">
  //                   <p className="text-base font-black leading-none text-gray-800">
  //                     {e.price}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //               )
  //             })}

  //           </div>
  //           <div className="lg:w-96 md:w-8/12 w-full lg:ml-14 bg-gray-100">
  //             <div className="flex flex-col lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 ">
  //               <div>
  //                 <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 ">
  //                   Summary
  //                 </p>
  //                 <div className="flex items-center justify-between pt-16">
  //                   <p className="text-base leading-none text-gray-800 ">
  //                     Subtotal
  //                   </p>
  //                   <p className="text-base leading-none text-gray-800 ">
  //                     $9,000
  //                   </p>
  //                 </div>
  //                 <div className="flex items-center justify-between pt-5">
  //                   <p className="text-base leading-none text-gray-800 ">
  //                     Shipping
  //                   </p>
  //                   <p className="text-base leading-none text-gray-800 ">$30</p>
  //                 </div>
  //                 <div className="flex items-center justify-between pt-5">
  //                   <p className="text-base leading-none text-gray-800 ">Tax</p>
  //                   <p className="text-base leading-none text-gray-800 ">$35</p>
  //                 </div>
  //               </div>
  //               <div>
  //                 <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
  //                   <p className="text-2xl leading-normal text-gray-800 ">
  //                     Total
  //                   </p>
  //                   <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
  //                     $10,240
  //                   </p>
  //                 </div>
  //                 <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white ">
  //                   Checkout
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
<div class="lg:w-[60%] border mx-auto my-5 px-[25px] py-[15px] border-solid border-[#ddd]">
  {event.map((item) => (
    <div class="mt-10">
      <div class="flex flex-col lg:flex-row lg:justify-between items-center">
        <div class="w-full lg:w-auto">
          <img class="w-full lg:w-[165px] h-[110px]" src={item.imgEvent} alt="" />
        </div>
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full  mt-4 lg:mt-0">
          <div class="ml-0 lg:ml-6">
            <h2>{item.event}</h2>
            <p>Date</p>
            <p>Ouverture des portes :</p>
            <p>Heure du spectacle :</p>
          </div>
          <div class="border border-solid-[#ddd] lg:ml-14 w-full lg:w-[50%] mt-4 lg:mt-0">
            <div class="border border-solid h-[40px] flex justify-between items-center bg-slate-100">
              <span class="p-2 font-bold">Tickets</span>
              <button class="p-1 text-xs text-red-600 font-semibold">Supprimer</button>
            </div>
            <div class="flex justify-between">
              <div class="p-2">
                <p class="text-sm font-semibold">1 Ticket</p>
                <span class="text-xs">1x 350 Dhs</span>
              </div>
              <p class="p-2 font-semibold">350 Dhs</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  ))}
   <div class="bg-slate-100 h-[100px] mt-4 lg:mt-20 flex justify-between p-9">
        <h2 class="text-lg font-normal">TOTAL à payer</h2>
        <p class="font-semibold">350 Dhs</p>
      </div>
</div>
  );
}

export default Carts;
