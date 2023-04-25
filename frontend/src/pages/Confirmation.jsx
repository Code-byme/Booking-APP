import React from 'react'
import { Link } from 'react-router-dom'

function Confirmation() {
  return (
   <div className="bg-slate-200 h-screen"> 
   <div className="bg-white lg:w-[40%] absolute lg:ml-[30%] mt-11 h-2/3 ">
        <div className='flex flex-col text-center '>
        <i className="fa fa-check text-6xl mt-9 text-green-600" aria-hidden="true"></i>
        <h1 className=' font-bold text-3xl mt-12  '>Order Confirmed</h1>
        </div>
        <p className='p-5 text-gray-500 text-center w-2/3 mx-auto mt-9'>We are pleased to inform you that your reservation request has been received and confirmed.</p>
        <div className='flex justify-center'>
        <Link to={"/orders"} className= " bg-yellow-500 hover:bg-yellow-700 text-white  mt-16 font-bold py-2 px-10 rounded mx-auto">View Orders</Link>
    </div>
   </div>

   </div>
  )
}

export default Confirmation