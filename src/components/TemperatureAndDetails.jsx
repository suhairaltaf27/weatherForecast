import React from "react";
import images from "../images/output-onlinegiftools.gif"
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  } from "@iconscout/react-unicons";

function TemperatureAndDetails(){
  return ( <div>
    <div className="flex items-center justify-center py-6 text-ul text-cyan-300">
      <p>Sunny</p>
    </div>
  

    <div className="flex flex-row items-center justify-between text-white py-3">
    
    <img 
      src={images}  
      alt="sunne" 
      className="w-16" 
    />
    <p className="text-5xl"> 34° </p>
    <div className="flex flex-col space-y-2">

      <div className="flex font-light text-sm items-center justify-center">
        <UilTemperature size={20} className="mr-1" />
        Real fell: <span className="font-medium ml-1">36°</span>
      </div>

      <div className="flex font-light text-sm items-center justify-center">
        <UilTear size={20} className="mr-1" />
        Humadity: <span className="font-medium ml-1">65%</span>
      </div>

      <div className="flex font-light text-sm items-center justify-center">
        <UilWind size={20} className="mr-1" />
        Wind: <span className="font-medium ml-1">11 Km/h</span>
      </div>
      </div>
    </div>
  <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">

  <UilSun />
    <p className="font-light">Rise: <span className="font-medium ml-1">06:00</span></p>
    <p className="font-light">|</p>

    <UilSunset />
    <p className="font-light">Set: <span className="font-medium ml-1">06:45</span></p>
    <p className="font-light">|</p>

    <UilArrowUp />
    <p className="font-light">High: <span className="font-medium ml-1">25%</span></p>
    <p className="font-light">|</p>

    <UilArrowDown />
    <p className="font-light">Low: <span className="font-medium ml-1">15%</span></p>
  </div>

   </div>
)
}

export default TemperatureAndDetails;