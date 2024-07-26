import React from "react";
import { useState, useEffect } from "react";

export function useWeatherData(city) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "777e4156e1ec809937f307e5ff01bb24";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
