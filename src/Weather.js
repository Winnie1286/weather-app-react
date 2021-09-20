import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import DayForecast from "./DayForecast";
import axios from "axios";
import "./styles.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      maxtemp: response.data.main.temp_max,
      mintemp: response.data.main.temp_min,
      coord: response.data.coord,
      ready: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "90f1d53b11df0bd6f29722974b5c486b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input
            className="btn btn-primary searchButton"
            type="submit"
            value="Search"
          />
        </form>
        <WeatherInfo data={weatherData} />
        <DayForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
