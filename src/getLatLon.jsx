import React from "react";
import { useState, useEffect } from "react";

export function getLatLon(city) {
  const [latLonData, setLatLonData] = useState(null);

  useEffect(() => {
    const apiKey = "777e4156e1ec809937f307e5ff01bb24";

    const limit = 5;
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Nie udało sie pobrać danych");
        }
        return response.json();
      })
      .then((data) => {
        setLatLonData(data);
      })
      .catch((error) => {
        console.error("Błąd: ", error);
      });
  }, [city]);
  return latLonData;
}

export function getLat(city) {
  let latData = getLatLon(city);
  latData = latData[0].lat;
  return latData;
}
