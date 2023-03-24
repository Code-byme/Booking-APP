import { useEffect, useState } from "react";
import "./App.css";
import Cities from "./components/Cities";
import EventsTypes from "./components/EventsTypes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PastEvents from "./components/PastEvents";
import PopularEvents from "./components/PopularEvents";
import Slider from "./components/Slider";

function App() {


  return ( 
    <div className="App">
      <Navbar />
      <Slider />
      <Cities />
      <EventsTypes />
      <PopularEvents />
      <PastEvents />
      <Footer />
    </div>
  );
}

export default App;
