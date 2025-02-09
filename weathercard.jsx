import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Replace with your OpenWeather API key
  const CITY = "Hyderabad"; // Change to your preferred city

  // Function to fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
    setInterval(() => setDateTime(new Date()), 1000); // Update time every second
  }, []);

  return (
    <div className="card weather-card text-center">
      <div className="card-body">
        <h5 className="card-title">{dateTime.toLocaleDateString()}</h5>
        <p className="card-text">{dateTime.toLocaleTimeString()}</p>

        {weather ? (
          <>
            <h6>{weather.name}, {weather.sys.country}</h6>
            <h3>{weather.main.temp}°C</h3>
            <p>{weather.weather[0].description.toUpperCase()}</p>
          </>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
