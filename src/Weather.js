import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleRespons(response) {
    console.log(response.data);
    console.log(setCity);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: `${response.data.condition.icon_url}`,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <span>
          <form id="search-form">
            <input
              type="text"
              placeholder="Enter a city"
              className="searchBar"
              autoComplete="off"
              id="city-input"
            />
            <input type="submit" value="Search" className="searchButton" />
          </form>

          <WeatherInfo data={weatherData} />
        </span>

        <div className="weather-forecast" id="forecast"></div>
      </div>
    );
  } else {
    const apiKey = "588oc041a6e953f45658b7911bf5tb98";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespons);
    return <div>Loading the app ...</div>;
  }
}