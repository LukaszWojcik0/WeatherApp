import { getLatLon } from "./getLatLon";
import { fetchForecast } from "./fetchForecast";
import { useQuery } from "@tanstack/react-query";

export function useForecastData(city) {
  const { isPending, isError, data } = useQuery({
    queryKey: ["ForecastData", city],
    queryFn: async () => {
      const latLonData = await getLatLon(city);

      if (!latLonData || latLonData.length === 0) {
        throw new Error("Dane lokalizacji niedostępne");
      }
      const { lat, lon } = latLonData[0];
      return fetchForecast(lat, lon);
    },
  });

  return {
    isPending,
    isError,
    data,
  };
}
