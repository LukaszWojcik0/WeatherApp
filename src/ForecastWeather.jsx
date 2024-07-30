import React from "react";
import { ForecastBox } from "./ForecastBox";
import { useForecastData } from "./useForecastData";

export function ForecastWeather() {
  const forecastData = useForecastData("London");

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const midDays = [];

  if (forecastData) {
    console.log(forecastData);
    console.log(forecastData.list[6].dt_txt);
    console.log(forecastData.list[6].dt);

    console.log((forecastData.list[8].dt % 86400) / 3600);

    return (
      <>
        <ForecastBox listId={midDays[0]} />
        <ForecastBox listId={midDays[1]} />
        <ForecastBox listId={midDays[2]} />
        <ForecastBox listId={midDays[3]} />
      </>
    );
  }
  // let dayNum;
  // if (forecastData) {
  //   if (forecastData.list[6].dt_txt) {
  //     let day = forecastData.list[6].dt_txt.slice(0, 10);
  //     dayNum = new Date(day).getDay();
  //     console.log(dayNames[dayNum]);
  //   }
  // }
}
