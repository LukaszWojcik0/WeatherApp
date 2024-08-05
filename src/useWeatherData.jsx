// import React from "react";
import { getLatLon } from "./getLatLon";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./fetchWeather";

export function useWeatherData(city) {
  const { isPending, isError, data } = useQuery({
    queryKey: ["weatherData", city],
    queryFn: async () => {
      const latLonData = await getLatLon(city);

      if (!latLonData || latLonData.length === 0) {
        throw new Error("Dane lokalizacji niedostępne");
      }
      const { lat, lon } = latLonData[0];
      return fetchWeather(lat, lon);
    },
  });

  return {
    isPending,
    isError,
    data,
  };
}
