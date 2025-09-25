import React, { useState } from "react";

const SearchBox = ({ updateInformation }) => {
  let [city, setcity] = useState("");
  let [ERR, serERR] = useState(false);

  const API_URL = import.meta.env.VITE_BASE_URL || "https://api.openweathermap.org/data/2.5/weather";
  const APT_KEY = import.meta.env.VITE_API_KEY || "7e80a94afdf5b8bc93a201bf01938431";

  let getWeatherInformation = async (city) => {
    if (!city) throw new Error("City name is required");
    const res = await fetch(
      `${API_URL}?q=${encodeURIComponent(city)}&appid=${APT_KEY}&units=metric`
    );
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `Failed to fetch weather for ${city}`);
    }
    let jsonResult = await res.json();
    // console.log("jsonResult==============>", jsonResult);
    let weatherData = {
      name: jsonResult.name,
      country: jsonResult.sys.country,
      feels_like: jsonResult.main.feels_like,
      humidity: jsonResult.main.humidity,
      temp: jsonResult.main.temp,
      temp_max: jsonResult.main.temp_max,
      temp_min: jsonResult.main.temp_min,
      pressure: jsonResult.main.pressure,
      speed: jsonResult.wind.speed,
      weather: jsonResult.weather[0].description,
    };
    // console.log("weatherData============>", weatherData);
    return weatherData;
  };

  let handleChange = (event) => {
    // console.log("event target value ===>", event.target.value);
    setcity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setcity("");
      let newValue = await getWeatherInformation(city);
      updateInformation(newValue);
    } catch (error) {
      serERR(true);
      console.log("error============>", error);
    }
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-5 w-full"
      >
        <input
          value={city}
          onChange={handleChange}
          className="w-full sm:w-72 md:w-96 px-3 py-2 bg-zinc-100 rounded-lg text-zinc-800 font-semibold outline-0"
          type="text"
          placeholder="Search city name..."
        />
        <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
          {ERR && (
            <p className="text-red-800 font-semibold text-sm sm:mr-3">
              Please enter a valid city name
            </p>
          )}
          <button
            className="mt-2 sm:mt-0 sm:ml-0 px-3 py-2 bg-blue-500 hover:bg-blue-800 rounded-lg font-semibold text-zinc-200 w-full sm:w-auto"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
