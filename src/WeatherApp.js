import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=eeefcf8bc7bc9b0099f74b9f1d2cb417&units=metric`);
      if (response.status === 200) {
        setWeatherData(response.data);
        setError('');
      } else {
        setError('City not found');
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('City not found');
    }
  };

  useEffect(() => {
    fetchWeather('London'); // Initial fetch for the default city
  }, []); // Empty dependency array to ensure it runs only once

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Sunrise: {formatTime(weatherData.sys.sunrise)}</p>
          <p>Sunset: {formatTime(weatherData.sys.sunset)}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
