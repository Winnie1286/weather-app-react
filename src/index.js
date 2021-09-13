import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Footer from "./Footer";
import Heading from "./Heading";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <Weather defaultCity="New York" />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
