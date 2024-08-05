export function fetchForecast(lat, lon) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey +
    "&units=metric";

  //   https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric

  return fetch(apiUrl).then((res) => res.json());
}
