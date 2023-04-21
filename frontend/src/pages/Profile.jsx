import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import axios from "axios"

function Profile() {
    const {user} = useContext(AuthContext)
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("")
    
  
    const handleNameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePassChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      
      e.preventDefault();
      const data = {
        email: user.email, // replace with actual email
        username: user.username, // replace with actual username
        password: password, // replace with actual password
      };
      console.log(data);
      try {
        const response = await axios.put('https://backend-szh0.onrender.com/api/profile', data);
        alert("Update has been successfully!"); 
      } catch (err) {
        console.error(err); 
      }
    };
      
 
    return (
        <div className='bg-slate-50 pb-20'>
      <div className="max-w-md mx-auto py-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Information</h3>
          </div>
          <div className="border-t border-gray-200">
            <form>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Username
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={username}
                    onChange={handleNameChange}
                    autoComplete="given-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"                  />
                </div>
              </div>
  
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Email address
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"                  />
                </div>
              </div>
  
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Password
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange={handlePassChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick={handleSubmit}
            type="submit"
            className=" text-white bg-gray-600  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-primary-600 :hover:bg-primary-700 :focus:ring-primary-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
)
}

export default Profile