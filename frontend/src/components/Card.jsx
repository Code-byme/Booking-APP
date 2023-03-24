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
    <div class="flex justify-center">

    <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 transition-[0.7s] duration-[ease] hover:scale-110">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg"
        src={event.image}
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {event.title}
      </h5>
      <div className={`${event.event_date_format ? "flex justify-between items-center" : "justify-self-center"}`}>
      <span class="text-xs">{event.event_date_format}</span>
      <span className='text-xs font-bold'>{event.price}Dhs</span>
      </div>
      
  
     
    </div>
  </div>
  </div>
  )
}

export default Card