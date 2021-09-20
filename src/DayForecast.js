import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";
import axios from "axios";

export default function DayForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "90f1d53b11df0bd6f29722974b5c486b";
  let coordinatesLat = props.coordinates.lat;
  let coordinatesLon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinatesLat}&lon=${coordinatesLon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DayForecast">
      <h6>5 Day Forecast</h6>
      <div className="row forecast">
        <div className="col"> </div>
      </div>
    </div>
  );
}
