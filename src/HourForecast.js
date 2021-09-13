import React from "react";

import "./styles.css";

export default function HourForecast() {
  return (
    <div className="row">
      <div className="col-4 weatherForecastHour">
        12 AM
        <br />
        1 AM
        <br />
        2 AM
        <br />
        3AM
      </div>
      <div className="col-8 hourlyForecast"> Hourly forecast</div>
    </div>
  );
}
