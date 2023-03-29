import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


function LayoutHeaderOnly() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
   
  </>
  )
}

export default LayoutHeaderOnly