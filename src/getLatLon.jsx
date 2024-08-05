export function getLatLon(city) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const limit = 1;
  const apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=" +
    limit +
    "&appid=" +
    apiKey;

  const latLonData = fetch(apiUrl).then((res) => res.json());
  return latLonData;
}
