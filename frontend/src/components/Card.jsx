import React from 'react'

function Card({event}) {
    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
              
        // Regular expression to identify HTML tags in
        // the input string. Replacing the identified
        // HTML tag with a null string.
        return str.replace( /(<([^>]+)>)/ig, '');
    }
  return (
    <div className="flex justify-center">

    <div
    className="block max-w-sm rounded-lg bg-white shadow-lg  transition-[0.7s] duration-[ease] hover:scale-110">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        className="rounded-t-lg"
        src={event.image}
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        {event.title}
      </h5>
      <div className={`${event.event_date_format ? "flex justify-between items-center" : "justify-self-center"}`}>
      <span className="text-xs">{event.event_date_format}</span>
      <span className='text-xs font-bold'>{event.price}Dhs</span>
      </div>
      
  
     
    </div>
  </div>
  </div>
  )
}

export default Card