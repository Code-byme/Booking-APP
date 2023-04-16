import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function PopularEvents() { 

    
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
      
        <div className="flex items-center py-4">
        
        <div className="flex-grow h-px bg-gray-400 mr-6"></div> 
        <h1 className="text-3xl font-medium mt-9 mb-6 text-center">Popular Events</h1>
        <div className="flex-grow h-px bg-gray-400 ml-6"></div>
    
        </div>
        <div  className="max-w-screen-lg grid grid-cols-1 gap-6 text-center mx-auto w-2/3 lg:grid-cols-4 ">
  {events.map(event=>{
    return    <div key={event.id}>  <Link to={"/eventdetail/"+event.id} > <Card event={event} /> </Link> </div>

  })}
  </div>
</div>
    
  )
}

export default PopularEvents