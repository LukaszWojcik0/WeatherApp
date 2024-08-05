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
    <div className="flex place-content-evenly h-full items-center mt-10 mb-10">
      <img
        src={"src/assets/weather-icons/" + icon + ".png"}
        alt={"current-weather-img-" + weather}
        className="w-20"
      />
      <div className="flex-col ml-5">
        <p className="text-3xl">{temp}&deg;C</p>
        <div className="flex flex-row ">
          <img
            src="src/assets/location-pin-img.svg"
            alt="location-pin-img"
            width={20}
          />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}
