import React, { useState } from "react";
import Information from "../Components/Information.jsx";
import Navbar from "../Components/Navbar.jsx";

const Weather = () => {
  const [weatherInformation, setWeatherInformation] = useState({
    country: "IN",
    feels_like: 35.29,
    humidity: 37,
    name: "Delhi",
    temp: 35.88,
    temp_max: 35.88,
    temp_min: 35.88,
    weather: "clear sky",
    pressure: 1006,
    speed: 3.35,
  });

  let updateInformation = (newValue) => {
    setWeatherInformation(newValue);
  };

  return (
    <>
      <div className="wheatherApp w-full min-h-screen flex flex-col bg-blue-600 gap-8 items-center py-6 px-4 sm:px-6 md:px-10">
        <Navbar updateInformation={updateInformation} />
        <Information weatherInformation={weatherInformation} />
      </div>
    </>
  );
};

export default Weather;
