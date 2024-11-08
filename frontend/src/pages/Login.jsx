import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
        const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        });
        const { loading, error, dispatch} = useContext(AuthContext);

        const navigate = useNavigate()

        const handleChange = (e) => {
            setCredentials(prev=>({...prev, [e.target.id]: e.target.value}));
        }
        const handleClick = async (e) => {
          e.preventDefault();
          dispatch({ type: "LOGIN_START" });
        
          try {
            const response = await axios.post("https://backend-szh0.onrender.com/api/auth/login", credentials, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            navigate("/");
          } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
          }
        };
          

  return (
    <div className='bg-[url("/bg.jpg")] bg-cover'>
      <section className=" :bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow :border md:mt-0 sm:max-w-md xl:p-0 :bg-gray-800 :border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl :text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    form="email"
                    className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Your email
                  </label>
                  <input
                  onChange={handleChange}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Password
                  </label>
                  <input
                  onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      {/* <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 :bg-gray-700 :border-gray-600 :focus:ring-primary-600 :ring-offset-gray-800"
                        required=""
                      /> */}
                    </div>
                    
                    <div className="ml-3 text-sm">
                      {/* <label
                        for="remember"
                        className="text-gray-500 :text-gray-300"
                      >
                        Remember me
                      </label> */}
                    </div>
                  </div>
                  <Link
                    to={"#"}
                    className="text-sm font-medium text-primary-600 hover:underline :text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button disabled={loading} onClick={handleClick}
                  type="submit"
                  className="w-full text-white bg-gray-600  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-primary-600 :hover:bg-primary-700 :focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 :text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/auth/register"}
                    className="font-medium text-primary-600 hover:underline :text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
