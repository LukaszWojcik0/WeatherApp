import React from "react";
import { useWeatherData } from "./useWeatherData";

export function CurrentWeather(props) {
  const weatherData = useWeatherData(props.city);

  if (!weatherData) return <div>Ładowanie...</div>;

  // const temp = Math.round(weatherData.main.temp);
  // const name = weatherData.name;
  // const icon = weatherData.weather[0].icon;
  // let weather = weatherData.weather[0].main;

  let temp, name, icon, weather;

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
