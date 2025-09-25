import React from "react";

const Information = ({ weatherInformation }) => {
  let location_url = <i className="ri-map-pin-line"></i>;
  let thunderstrome_url = <i className="ri-thunderstorms-fill"></i>;
  let moonCloudy_url = <i className="ri-moon-cloudy-fill"></i>;
  let sunCloudy_url = <i className="ri-sun-cloudy-fill"></i>;

  return (
    <>
      {/* card */}
      <div className="card w-full sm:w-11/12 md:w-3/4 lg:w-1/2 bg-blue-700 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 rounded-4xl flex flex-col justify-center items-center gap-4 md:gap-5 text-zinc-50">
        {/* first */}
        <div className="first flex flex-row items-center gap-3 sm:gap-5 font-semibold text-lg md:text-2xl">
          <div className="icon_location">{location_url}</div>
          <div className="CITYcountry">
            {weatherInformation.name} , {weatherInformation.country}
          </div>
        </div>

        {/* second */}
        <div className="second text-4xl md:text-6xl lg:text-7xl font-bold">
          {weatherInformation.temp} °c
        </div>

        {/* third */}
        <div className="third flex flex-row gap-6 sm:gap-10 justify-around items-center w-full px-4 md:px-0">
          <div className="headings text-xl md:text-3xl lg:text-4xl">
            {weatherInformation.weather}
          </div>
          <div className="icons text-5xl md:text-7xl lg:text-9xl">
            {weatherInformation.humidity > 40
              ? thunderstrome_url
              : weatherInformation.temp > 20
              ? sunCloudy_url
              : moonCloudy_url}
          </div>
        </div>

        {/* fourth */}
        <div className="containerCardInfo bg-blue-600 rounded-4xl px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full mt-4">
          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.feels_like}
            </div>
            <div className="heading text-sm md:text-base">Feels_like</div>
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.humidity} %
            </div>
            <div className="heading text-sm md:text-base">Humidity</div>
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.weather}
            </div>
            <div className="heading text-sm md:text-base">Weather</div>
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.temp} &deg;C
            </div>
            <div className="heading text-sm md:text-base">Temp</div>
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.temp_max} &deg;C
            </div>
            <div className="heading text-sm md:text-base">Temp_max</div>
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.temp_min} &deg;C
            </div>
            <div className="heading text-sm md:text-base">Temp_min</div>
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.pressure} hPa
            </div>
            <div className="heading text-sm md:text-base">Pressure</div>
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="value text-lg md:text-2xl font-semibold">
              {weatherInformation.speed} m/s
            </div>
            <div className="heading text-sm md:text-base">Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
