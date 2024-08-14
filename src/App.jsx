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
    <div className="max-w-md w-4/5 m-auto my-12 p-5 bg-slate-200/20 backdrop-blur-xl rounded-xl ">
      <QueryClientProvider client={queryClient}>
        <input
          type="text"
          name="cityInput"
          placeholder="City name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Check Weather
        </button>
        <WeatherBox city={cityVariable} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
