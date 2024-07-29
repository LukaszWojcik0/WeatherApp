import React from "react";
import { useState, useEffect } from "react";
import { getLatLon } from "./getLatLon";

export function useWeatherData(city) {
  const [weatherData, setWeatherData] = useState(null);

  const latLonData = getLatLon(city);

  let lat;
  let lon;

  if (latLonData) {
    lat = latLonData[0].lat;
    lon = latLonData[0].lon;
  }

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Nie udało sie pobrać danych");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Błąd: ", error);
      });
  }, [city]);
  return weatherData;
}
