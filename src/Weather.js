import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "a95c2c6739994ba4903e007ee817e7d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <span>
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a city"
              className="searchBar"
              autoComplete="off"
              id="city-input"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="searchButton" />
          </form>

          <WeatherInfo data={weatherData} />
        </span>

        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return <div>Loading the app ...</div>;
  }
}
