import React from "react";

import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5 current">
          <h1>
            <span id="city"> New York</span>
          </h1>
          <h3>
            <span className="temperature" id="temperature">
              74
            </span>
            <a href="/" id="fahrenheitLink" className="active">
              °F
            </a>
            <span className="divider"> | </span>
            <a href="/" id="celsiusLink">
              °C
            </a>
            <br />
            <div className="nowEmoji">
              {" "}
              <img id="now-icon" src="" alt="" />
            </div>
          </h3>

          <ul>
            <li>
              {" "}
              <span id="description">Cloudy</span>{" "}
            </li>
            <li>
              High | Low: <span id="max-temp">90</span> |{" "}
              <span id="min-temp">72</span>°F
            </li>
            <li>
              Precipitation: <span id="precipitation"></span>%
            </li>
            <li>
              Wind: <span id="wind"> 5 </span> miles/hour
            </li>
            <li>
              Humidity: <span id="humidity">65</span> %{" "}
            </li>
            <li>
              Sunrise: <span id="sunrise">☀️</span>
            </li>
            <li>
              Sunset: <span id="sunset">☀️</span>
            </li>
          </ul>
        </div>
        <div className="HourForecast">
          <div className="col-3 hour">
            <h5>
              <div id="hours"></div>
            </h5>
          </div>
          <div className="col-4 hourlyForecast">
            <h5>
              <span id="hourlyForecast">Weather Forecast</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
