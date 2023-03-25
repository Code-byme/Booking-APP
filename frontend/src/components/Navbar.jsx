import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { user } = useContext(AuthContext);

  function Logout() {
    localStorage.removeItem("user")
    location.reload()
    } 

  return (
    <nav className="w-full  shadow bg-gray-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to={"/"}>
              <img
                src="//www.ticket.ma/img/logo.png"
                className="clip-logoticketma"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 mt-8">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
                data-te-ripple-init
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className=" hover:text-indigo-200">
                <Link to={"/"}>Home</Link>
              </li>
              <li className=" hover:text-indigo-200">
                <Link to={"/"}>Blog</Link>
              </li>
              <li className=" hover:text-indigo-200">
                <Link to={"/"}>About US</Link>
              </li>
              <li className=" hover:text-indigo-200">
                <Link to={"/"}>Contact US</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              {user ?<> <p className="mr-7">{user.username}</p>
            <button onClick={()=>Logout()} className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 w-full">
              Logout
            </button> </> : <>
              <Link
                to={"/auth/login"}
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
              <Link
                to={"/"}
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </Link> </>}
            </div>
          </div>
        </div>
        {user ? (
          <div className=" hidden lg:flex">
            <p className="mr-7">{user.username}</p>
            <button onClick={()=>Logout()} className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to={"/auth/login"}
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Sign in
            </Link>
            <Link
              to={"/"}
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
