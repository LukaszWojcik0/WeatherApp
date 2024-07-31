import React from "react";
import { useWeatherData } from "./useWeatherData";

export function CurrentWeather(props) {
  const response = useWeatherData(props.city);

  if (!response) return <div>Ładowanie...</div>;

  const temp = Math.round(response.weatherData.main.temp);
  const name = response.weatherData.name;
  const icon = response.weatherData.weather[0].icon;
  const weather = response.weatherData.weather[0].main;

  // console.log(weatherData);

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
