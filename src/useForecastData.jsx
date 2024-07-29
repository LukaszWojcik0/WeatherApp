import React from "react";
import { useState, useEffect } from "react";
import { getLatLon } from "./getLatLon";

export function useForecastData(city) {
  const [forecastData, setForecastData] = useState(null);

  const latLonData = getLatLon(city);

  let lat, lon;

  if (latLonData) {
    lat = latLonData[0].lat;
    lon = latLonData[0].lon;
  }

  useEffect(() => {
    const apiKey = "777e4156e1ec809937f307e5ff01bb24";

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Nie udało sie pobrać danych");
        }
        return response.json();
      })
      .then((data) => {
        setForecastData(data);
      })
      .catch((error) => console.log("Błąd", error));
  }, [city]);
  return forecastData;
}
