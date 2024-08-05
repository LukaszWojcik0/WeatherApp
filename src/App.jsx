import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./App.css";
const queryClient = new QueryClient();

const city = "Gdańsk";

function App() {
  return (
    <div className="w-3/5 m-auto">
      <QueryClientProvider client={queryClient}>
        <input type="text" />
        <input type="button" value="Check" />
        <CurrentWeather city={city} />
        <ForecastWeather city={city} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
