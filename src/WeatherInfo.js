import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import HourForecast from "./HourForecast";
import DayForecast from "./DayForecast";

export default function WeatherInfo(props) {
  return (
    <div className="row WeatherInfo">
      <div className="col-6 current">
        <h1>
          {" "}
          <span className="city"> New York </span>{" "}
        </h1>
        <h3>
          {" "}
          <span className="temperature"> 74</span>
          <a href="/" className="fahrenheitLink">
            °F
          </a>
          <span className="divider"> | </span>
          <a href="/" className="celsiusLink">
            {" "}
            °C{" "}
          </a>
          <br />
          <div className="nowEmoji">
            {" "}
            <img className="now-icon" src="" alt="" />
          </div>
        </h3>
        <ul>
          <li>
            {" "}
            <span className="description">Cloudy</span>{" "}
          </li>
          <li>
            High | Low: <span className="max-temp">90</span> |{" "}
            <span className="min-temp">72</span>°F
          </li>
          <li>
            Precipitation: <span className="precipitation"></span>%
          </li>
          <li>
            Wind: <span className="wind"> 5 </span> miles/hour
          </li>
          <li>
            Humidity: <span className="humidity">65</span> %{" "}
          </li>
          <li>
            Sunrise: <span className="sunrise">☀️</span>
          </li>
          <li>
            Sunset: <span className="sunset">☀️</span>
          </li>
        </ul>
      </div>

      <div className="col-6">
        <h5>
          <HourForecast />
        </h5>
      </div>
      <DayForecast />
    </div>
  );
}
