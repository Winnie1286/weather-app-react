import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Footer from "./Footer";
import Heading from "./Heading";
import Search from "./Search";
import DayForecast from "./DayForecast";
import HourForecast from "./HourForecast";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Search />
      <Weather />
      <HourForecast />
      <DayForecast />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
