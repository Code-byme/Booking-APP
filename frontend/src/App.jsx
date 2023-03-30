import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutHeaderOnly from "./components/LayoutHeaderOnly";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Listings from "./pages/Listings";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<LayoutHeaderOnly />}>
            <Route  path="/" element={<Home />} />
            <Route  path="/auth/login" element={<Login />} />
            <Route  path="/auth/register" element={<SignUp />} />
            <Route  path="/eventdetail/:id" element={<EventDetail />} />
            <Route  path="/listings/:id" element={<Listings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
