import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutHeaderOnly from "./components/LayoutHeaderOnly";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Listings from "./pages/Listings";
import EventDetail from "./pages/EventDetail";
import Carts from "./pages/Carts";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Ticket from "./pages/Ticket";



function App() {
  const {user} = useContext(AuthContext);

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
            <Route  path="/cart" element = { <ProtectedRoute user={user}><Carts /></ProtectedRoute>} />
            <Route  path="/profile" element = {<ProtectedRoute user={user}><Profile/></ProtectedRoute>}  />
          </Route>
          <Route  path="/ticket/" element = {<Ticket/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
