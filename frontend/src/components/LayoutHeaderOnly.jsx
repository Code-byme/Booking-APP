import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";


function LayoutHeaderOnly() {
  return (
    <>
    <NavBar />
    <Outlet />
   
  </>
  )
}

export default LayoutHeaderOnly