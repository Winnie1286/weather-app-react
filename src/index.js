import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
