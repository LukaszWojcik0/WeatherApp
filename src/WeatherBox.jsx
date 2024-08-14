import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";

export function WeatherBox(props) {
  return (
    <div>
      <CurrentWeather city={props.city} />
      <ForecastWeather city={props.city} />
    </div>
  );
}
