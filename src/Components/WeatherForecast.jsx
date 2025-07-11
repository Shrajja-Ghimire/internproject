import React, { useState } from "react";

const WeatherForecast = () => {
  const [cityInput, setCityInput] = useState("Kathmandu");
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = "b0531ca23e7f59c8941cb7fc76c7bbd1";

  const fetchWeather = async (lat, lon, cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result = await response.json();
      setForecast(result?.list || []);
      setCity(cityName);
      setError(null);
    } catch (err) {
      setError(err.message);
      setForecast([]);
      setCity("");
    }
  };

  const fetchCordinate = async () => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data || data.length === 0) {
        setError("City not found.");
        setForecast([]);
        return;
      }

      const { lat, lon, name } = data[0];
      fetchWeather(lat, lon, name);
    } catch (err) {
      setError("Failed to fetch coordinates.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-950 mb-4">
        Weather Forecast
      </h1>

      <div className="mb-6 text-center">
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city name"
          className="border px-4 py-2 rounded-md shadow-sm mr-2 focus:outline-none"
        />
        <button
          onClick={fetchCordinate}
          className="bg-indigo-950 text-white px-4 py-2 rounded-md hover:bg-blue-900"
        >
          Search
        </button>
      </div>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {city && (
        <h2 className="text-xl text-center font-bold mb-8">
          Name of City: {city}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {forecast.slice(0, 6).map((forecast, index) => (
          <div
            key={index}
            className=" hover:bg-indigo-50  rounded-xl p-5 shadow-md hover:shadow-lg transition"
          >
            <h2 className="shadow-md text-xl font-semibold text-blue-950 mb-2">
              {forecast.dt_txt}
            </h2>
            <p className="text-gray-700 text-center">
              Temp: {forecast.main?.temp}°C
            </p>
            <p className="text-gray-700 text-center">
              {forecast.weather?.[0]?.main}
            </p>
            <p className="text-gray-700 text-center">
              Humidity: {forecast.main?.humidity}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
