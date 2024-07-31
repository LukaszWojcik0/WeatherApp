import React from "react";
import { getLatLon } from "./getLatLon";
import { useQuery } from "react-query";
import { fetchWeather } from "./fetchWeather";

export function useWeatherData(city) {
  const {
    isLoading: isLoadingLatLon,
    error: latLonError,
    data: latLonData,
  } = useQuery(["latLon", city], () => getLatLon(city), {
    staleTime: Infinity,
  });

  const {
    isLoading: isLoadingWeather,
    error: weatherError,
    data: weatherData,
  } = useQuery(
    ["weatherData", city],
    async () => {
      if (!latLonData || latLonData.length === 0) {
        throw new Error("Dane lokalizacji niedostępne");
      }
      const { lat, lon } = latLonData[0];
      return fetchWeather(lat, lon);
    },
    { enabled: !!latLonData && latLonData.length > 0 }
  );

  // console.log("LatLonData: ", latLonData);
  // console.log(latLonData[0].name);

  return {
    isLoading: isLoadingLatLon || isLoadingWeather,
    error: latLonError || weatherError,
    weatherData,
    latLonData,
  };
}
