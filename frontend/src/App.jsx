import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutHeaderOnly from "./components/LayoutHeaderOnly";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutHeaderOnly />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
