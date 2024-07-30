import React from "react";
import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";
import { QueryClient, QueryClientProvider } from "react-query";
// import "./App.css";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentWeather city={"Reykjavik"} />
      {/* <ForecastWeather /> */}
    </QueryClientProvider>
  );
}

export default App;
