import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./App.css";
const queryClient = new QueryClient();

const city = "Bibione";

function App() {
  return (
    <div className="w-4/5 m-auto my-12 p-5 bg-slate-200/20 backdrop-blur-xl rounded-xl">
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
