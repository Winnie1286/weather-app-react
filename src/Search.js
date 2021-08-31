import React from "react";

import "./search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="enterCity">
        <input
          type="text"
          placeholder="Enter city"
          autoFocus="on"
          id="cityInput"
        />
        <input className="btn btn-primary" type="submit" value="Search" />
        <button className="btn btn-secondary" id="current-location-button">
          Current Location
        </button>
      </form>
    </div>
  );
}
