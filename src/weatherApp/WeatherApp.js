import React, { useState, useEffect } from 'react';

const WeatherApp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=533a05658926df7de62e0f57df2ba81a`
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);

    }
    fetchApi();
  }, [search])
  return (
    <>
      <div className="weather-Interface w-80 h-80 bg-orange-300 absolute top-1/4 left-1/3">
        <div>
          <input
            className="border border-black 
                    rounded-full 
                    focus:outline-none 
                    focus:ring-indigo-500 
                    focus:z-10 sm:text-sm"

            type="search"
            value={search}

            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <>
            <div className=" flex py-20 px-20" >


              <svg className=" w-7 " fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
              </svg>

              <h1 className=" font-bold">{search}</h1>


            </div>
            <h2 className="temperature">
              {city.temp} Cel
            </h2>

            <h3 className="max_min_temp">
              Min: {city.temp} | Max: {city.temp}
            </h3>
          </>

        )

        }


      </div>
    </>
  )
}

export default WeatherApp;