export function ForecastBox(props) {
  const icon = props.data.weather[0].icon;

  const temp = Math.round(props.data.main.temp);

  const date = new Date(props.data.dt * 1000);
  const hour = date.getHours();

  return (
    <div className="p-3 px-5 bg-gray-100/40 rounded-lg backdrop-blur-sm">
      <img
        src={"src/assets/weather-icons/" + icon + ".png"}
        alt="forcast-weather-"
        width={40}
        className="mb-3"
      />
      <p className="text-center">{temp}&deg;C</p>
      <p className="text-center">{hour}:00</p>
    </div>
  );
}
