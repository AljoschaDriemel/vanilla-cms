import React, { useState } from "react";
import "./Weather.css";


export default function Weather() {
  const apiKey = "86fdc732352541f8660eaabf6fcbc971"
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("")
        });
    }
  };

  return (
    <>
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="Enter City..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
        />

        {typeof weatherData.main === 'undefined' ? (
          <>Hello new user</>
        ) : (
          <div>
            <p>{weatherData.name}</p>
            <p>{Math.round(weatherData.main.temp)}°C</p>
            <p>{weatherData.weather[0].main}</p>
          </div>
        )}

        {weatherData.cod === "404" ? (
          <p>City not found.</p>
        ) : (
            <></>
        )}
      </div>
    </>
  );
}
