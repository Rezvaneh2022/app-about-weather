import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "588oc041a6e953f45658b7911bf5tb98";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row ">
        <div className="col">
          <div className="border">
            <div className="WeatherForcast-day"> Thu</div>
            <img
              className="weatherForeca"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="icon"
            ></img>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">19°C </span>
              <span className="WeatherForecast-temperatures-min"> 10°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
