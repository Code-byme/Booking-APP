import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CountContext = createContext();

function CountProvider(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const fetchData = async () => {
      
      try {
        const response = await axios.get(
          `https://backend-szh0.onrender.com/api/cart?username=${user.username}`
        );
        setCount(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
}

export default CountProvider;
