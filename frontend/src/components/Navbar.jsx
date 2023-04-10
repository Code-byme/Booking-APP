import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { CountContext } from "../context/CountContext";




export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navigate  = useNavigate();
  const { dispatch,user} = useContext(AuthContext);
  // const [count,  setcount] = useState(0)
  // function counter (props){
  //   setcount(count + 1)
  // }
  const {count, setCount} = useContext(CountContext)

  function Logout() {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });

  }

  return (
    <nav className="w-full  shadow bg-gray-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link onClick={() => setNavbar(false)} to={"/"}>
              <img
                src="//www.ticket.ma/img/logo.png"
                className="clip-logoticketma"
              />
            </Link>
            <div className="md:hidden">
              <div className="flex">
                {user  &&   <><div className="ml-5 flex items-center justify-center h-5 w-3 border border-solid bg-green-600 absolute text-white ">
              {count}
    
              </div>
            <Link className="mr-4 mt-1" to={'/cart'}><CgShoppingCart size={30}/></Link>
            <Link className="mr-4 mt-1" to={'/profile'}><CgProfile size={30}/></Link></> }
          
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
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 mt-8">
            <form>
              <label
                form="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="mb-3  block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-gray-600  hover:bg-gray-800  font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="sm:hidden md:hidden lg:flex items-center justify-center space-y-8 md:space-x-6 md:space-y-0">
           
              <li className="hover:text-indigo-200 ">
                <Link
                  onClick={() => setNavbar(false)}
                  to={"/"}
                  className=" text-gray-600 hover:text-indigo-200"
                >
                  Home
                </Link>
              </li>

              <li className="hover:text-indigo-200">
                <Link
                  onClick={() => setNavbar(false)}
                  to={"/listings/1"}
                  className="text-gray-600 hover:text-indigo-200"
                >
                  Concerts
                </Link>
              </li>
              <li className="hover:text-indigo-200">
                <Link
                  onClick={() => setNavbar(false)}
                  to={"/listings/2"}
                  className="text-gray-600 hover:text-indigo-200"
                >
                  Theater Humor
                </Link>
              </li>
              <li className="hover:text-indigo-200">
                <Link
                  onClick={() => setNavbar(false)}
                  to={"/listings/4"}
                  className="text-gray-600 hover:text-indigo-200"
                >
                  Festivals
                </Link>
              </li>
              <li className="hover:text-indigo-200">
                <Link
                  onClick={() => setNavbar(false)}
                  to={"/listings/3"}
                  className="text-gray-600 hover:text-indigo-200"
                >
                  Loisirs
                </Link>
              </li>
            </ul>

            <div className="mt-3 md:hidden space-y-2 lg:hidden ">
              {user ? (
                <>
                  {" "}
                   <button
                    onClick={() => {
                      Logout();
                      setNavbar(false);
                    }}
                    className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 w-full"
                  >
                    Logout
                  </button>{" "}
                </>
              ) : (
                <>
                  <Link
                    onClick={() => setNavbar(false)}
                    to={"/auth/login"}
                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  >
                    Sign in
                  </Link>
                  <Link
                    onClick={() => setNavbar(false)}
                    to={"/auth/register"}
                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                    Sign up
                  </Link>{" "}
                </>
              )}
            </div>
          </div>
        </div>
        {user ? (
          <div className=" hidden lg:flex">
            <div className="ml-5 flex items-center justify-center h-5 w-3 border border-solid bg-green-600 absolute text-white ">
              {count}
    
              </div>
            <Link className="mr-4 mt-1" to={'/cart'}><CgShoppingCart size={30}/></Link>
            <Link className="mr-4 mt-1" to={'/profile'}><CgProfile size={30}/></Link>
            
            <button
              onClick={() => Logout()}
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
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
              to={"/auth/register"}
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
