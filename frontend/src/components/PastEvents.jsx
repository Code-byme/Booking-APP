import React, {useEffect, useState} from 'react'
import Card from './Card'

function PastEvents() {
    const [events, setEvents] = useState([])
    useEffect( ()=>{
         getEvent()
    },[])
   const getEvent = async () => {
     const response = await fetch("https://backend-szh0.onrender.com/ticket/?url=http://35.163.82.245:8081/events/list/last/30/0")
     const data =  await response.json();
     setEvents(data.list)
   }
   console.log(events)
  return (
    <div>
        <div class="flex items-center py-4">
        <div class="flex-grow h-px bg-gray-400 mr-6"></div> 
        <h1 className="text-4xl font-extrabold mt-9 mb-6 text-center">Past Events</h1>
        <div class="flex-grow h-px bg-gray-400 ml-6"></div>
        </div>
    <div className="max-w-screen-lg grid grid-cols-1 gap-6 text-center mx-auto w-2/3 lg:grid-cols-4 ">
  {events.slice(0,8).map(event=>{
    return <Card event={event}/>
  })}
  </div>
</div>
    
  )
}

export default PastEvents