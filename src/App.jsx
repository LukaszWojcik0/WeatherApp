import React from "react";
import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";
// import "./App.css";

function App() {
  return (
    <>
      <CurrentWeather city={"London"} />
      <ForecastWeather />
    </>
  );
}

export default App;
