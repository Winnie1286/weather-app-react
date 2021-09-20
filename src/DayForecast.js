import React, { useState, useEffect } from "react";
import ForecastData from "./ForecastData";
import "./styles.css";
import axios from "axios";

export default function DayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DayForecast">
        <h6>5 Day Forecast</h6>
        <div className="row forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastData data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "90f1d53b11df0bd6f29722974b5c486b";
    let coordinatesLat = props.coordinates.lat;
    let coordinatesLon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinatesLat}&lon=${coordinatesLon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
