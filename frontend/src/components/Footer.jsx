import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
    <footer className=" bg-gray-50 pt-8 pb-6 mt-20  lg:mx-[16.5%] ">
  <div className="container  px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <Link href="/">
              <img
                src="//www.ticket.ma/img/logo.png"
                className="clip-logoticketma"
              />
            </Link>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
        The 100% official and <br/> guaranteed ticket office.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-youtube"></i></button><button className=" text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-instagram"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 ">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>About Us</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>Blog</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>Github</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>Free Products</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>MIT License</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
           © <span id="get-current-year">2023</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"/> Ticket.ma.
          <Link to={"/"} className="text-blueGray-500 hover:text-blueGray-800"> All rights reserved</Link>.
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer