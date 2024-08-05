import { useWeatherData } from "./useWeatherData";

export function CurrentWeather(props) {
  const { isError, isPending, data } = useWeatherData(props.city);

  if (isPending) {
    return <div>Ładowanie...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  const icon = data.weather[0].icon;
  const weather = data.weather[0].main;
  const temp = Math.round(data.main.temp);
  const name = data.name;

  return (
    <div>
      <img
        src={"src/assets/weather-icons/" + icon + ".png"}
        alt={"current-weather-img-" + weather}
        width={60}
      />
      <p>{temp}&deg;C</p>
      <img
        src="src/assets/location-pin-img.svg"
        alt="location-pin-img"
        width={20}
      />
      <p>{name}</p>
    </div>
  );
}
