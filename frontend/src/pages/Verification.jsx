import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Verification() {
    const [check, setCheck] = useState(false)
    const {qrCode} = useParams()
    console.log(qrCode)
    const getEvent = async () => {
        const response = await fetch(
          `http://localhost:4000/api/order/check?qrCode=${qrCode}`
        );
        const data = await response.json();
        if(data[0]) {
            setCheck(true);
        }
      };

    useEffect( () => {
    getEvent();
      }, []);
  return (
    
    <div>{check ? "Valid" : "Non-Valid"}
    </div>
  )
}

export default Verification