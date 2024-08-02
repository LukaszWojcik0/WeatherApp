import { CurrentWeather } from "./CurrentWeather";
// import { ForecastWeather } from "./ForecastWeather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./App.css";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentWeather city={"Zabrze"} />
      {/* <ForecastWeather /> */}
    </QueryClientProvider>
  );
}

export default App;
