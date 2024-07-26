import React from "react";
import { useWeatherData } from "./useWeatherData";

export function CurrentWeather() {
  const city = "London";
  const weatherData = useWeatherData(city);

  if (!weatherData) return <div>Ładowanie...</div>;

  return (
    <div>
      <img src="" alt="current-weather-img" />
      <p>{weatherData.current}</p>
      <p></p>
    </div>
  );
}
