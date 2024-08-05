export function ForecastBox(props) {
  const icon = props.data.weather[0].icon;

  const temp = Math.round(props.data.main.temp);

  const date = new Date(props.data.dt * 1000);
  const hour = date.getHours();

  return (
    <div className="px-3">
      <img
        src={"src/assets/weather-icons/" + icon + ".png"}
        alt="forcast-weather-"
        width={40}
        className="mb-3"
      />
      <p>{temp}&deg;C</p>
      <p>{hour}:00</p>
    </div>
  );
}
