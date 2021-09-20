import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import HourForecast from "./HourForecast";
import Heading from "./Heading";

export default function WeatherInfo(props) {
  return (
    <div className="row WeatherInfo">
      <Heading date={props.data.date} />
      <div className="col-6 current">
        <h1>
          <span className="city"> {props.data.city} </span>
        </h1>
        <h3>
          <span className="temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
          <div>
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
        </h3>
        <ul>
          <li className="text-capitalize"> {props.data.description}</li>
          <li>
            High | Low: {Math.round(props.data.maxtemp)} |{" "}
            {Math.round(props.data.mintemp)}
            <span className="celsius">°C </span>
          </li>
          <li>Wind: {props.data.wind} km/hour</li>
          <li>Humidity: {props.data.humidity} % </li>
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
    </div>
  );
}
