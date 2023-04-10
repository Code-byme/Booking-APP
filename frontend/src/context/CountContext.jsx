import { useState, createContext, useEffect} from "react";
import React from "react";

export const CountContext = React.createContext();

function CountProvider(props) {
    const [count, setCount] = useState(()=> {
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? JSON.parse(storedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count])

  
    return (
      <CountContext.Provider value={{ count, setCount }}>
        {props.children}
      </CountContext.Provider>
    );
  }

export default CountProvider