import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastData(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <span className="forecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </span>
      <br />
      <span className="forecastTempMax">{maxTemperature()} </span>|{" "}
      <span className="forecastTempMin">{minTemperature()}</span>
      <span className="celsius">°C</span>
    </div>
  );
}
