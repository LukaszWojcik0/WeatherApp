import React from "react";
import { useForecastData } from "./useForecastData";

export function ForecastBox(city) {
  return (
    <div>
      <img src="" alt="forcast-weather-" width={40} />
      <p>&deg;C</p>
      <p>dzien tygodnia</p>
    </div>
  );
}
