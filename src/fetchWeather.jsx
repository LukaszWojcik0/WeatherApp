import React from "react";

export function fetchWeather(lat, lon) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey +
    "&units=metric";
  //   console.log(apiUrl);
  return fetch(apiUrl).then((res) => res.json());
}
