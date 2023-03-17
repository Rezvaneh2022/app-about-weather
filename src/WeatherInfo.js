import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <div className="row firstSection">
          <div className="col-4">
            <img src="#" id="icon" alt="weather icon" />
          </div>
          <div className="col-4 city-name">
            <h1 id="city">{props.data.city}</h1>
          </div>
          <div className="col-4">
            <div id="date" className="date">
              <FormattedDate date={props.data.date} />
            </div>
          </div>
        </div>

        <span className="temperatureSection">
          <strong id="temperature" className="weather-temperature">
            {Math.round(props.data.temperature)}
          </strong>
          <span className="units">°C</span>
        </span>

        <ul>
          <li>
            Description:
            <span id="Description" className="text-capitalize">
              {props.data.description}
            </span>
          </li>
          <li>
            Humidity:
            <span id="humidity">{props.data.humidity}</span>
          </li>

          <li>
            Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
