import { ForecastBox } from "./ForecastBox";
import { useForecastData } from "./useForecastData";

export function ForecastWeather(props) {
  const { isError, isPending, data } = useForecastData(props.city);

  if (isPending) {
    return <div>Ładowanie...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex place-content-evenly h-full ">
      <ForecastBox data={data.list[0]} />
      <ForecastBox data={data.list[1]} />
      <ForecastBox data={data.list[2]} />
      <ForecastBox data={data.list[3]} />
    </div>
  );
}
