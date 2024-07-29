import React from "react";
import { useWeatherData } from "./useWeatherData";

export function CurrentWeather() {
  const city = "Warszawa";
  const weatherData = useWeatherData(city);

  if (!weatherData) return <div>Ładowanie...</div>;

  // console.log(weatherData.weather[0].description);
  const temp = Math.round(weatherData.main.temp);
  const name = weatherData.name;
  const icon = weatherData.weather[0].icon;
  let weather = weatherData.weather[0].main;
  console.log(weatherData);
  return (
    <div>
      <img
        src={"src/assets/weather-icons/" + icon + ".png"}
        alt={"current-weather-img-" + weather}
        width={60}
      />
      <p>{temp}&deg;C</p>
      <img
        src="src/assets/location-pin-img.svg"
        alt="location-pin-img"
        width={20}
      />
      <p>{name}</p>
    </div>
  );
}
