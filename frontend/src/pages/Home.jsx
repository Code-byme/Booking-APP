import { useEffect, useState } from "react";
import Cities from "../components/Cities";
import EventsTypes from "../components/EventsTypes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PastEvents from "../components/PastEvents";
import PopularEvents from "../components/PopularEvents";
import Slider from "../components/Slider";

function Home() {


  return ( 
    <div className="Home">
      <Slider />
      <Cities />
      <EventsTypes />
      <PopularEvents />
      <PastEvents />
      
    </div>
  );
}

export default Home;
