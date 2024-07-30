import React from "react";
import { getLatLon } from "./getLatLon";
import { useQuery } from "react-query";

export function useWeatherData(city) {
  // const latLonData = getLatLon(city);

  // USEQUERY
  const {
    isLoading,
    error,
    data: weatherData,
  } = useQuery("weatherData", async () => {
    const { lat, lon } = await getLatLon(city);
    fetchWeather(lat, lon);
  });

  if (isLoading) return "Ładowanie...";
  if (error) return "Error: " + error.message;
  console.log(weatherData);
  return weatherData;
}

function fetchWeather(lat, lon) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey +
    "&units=metric";

  return fetch(apiUrl).then((res) => res.json());
}
