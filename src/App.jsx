import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherBox } from "./WeatherBox";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("");

  let cityVariable = "London";

  if (city) {
    cityVariable = city;
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setCity(inputValue);
  };

  return (
    <div className="max-w-md w-4/5 m-auto my-12 p-5 bg-slate-200/80 backdrop-blur-xl rounded-xl ">
      <QueryClientProvider client={queryClient}>
        <div className="w-max m-auto flex place-content-evenly">
          <input
            type="text"
            name="cityInput"
            placeholder="City name"
            value={inputValue}
            onChange={handleInputChange}
            className="p-1  bg-slate-200/0 border-b-2 focus:bg-slate-200/30 border-main-bg focus:outline-none"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="mx-2 p-1 px-2 bg-main-bg text-secondary-bg rounded-lg hover:bg-secondary-bg hover:text-main-bg"
          >
            Check Weather
          </button>
        </div>
        <WeatherBox city={cityVariable} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
