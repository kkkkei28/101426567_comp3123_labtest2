import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './services/WeatherService';
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const handleSearch = async (city) => {
        try {
            const weatherData = await fetchWeather(city);
            setWeather(weatherData);

            // Dummy forecast data (replace with API call for actual forecast)
            setForecast([
                { day: 'Mon', temp: 25, icon: '01d' },
                { day: 'Tue', temp: 22, icon: '02d' },
                { day: 'Wed', temp: 27, icon: '03d' },
                { day: 'Thu', temp: 28, icon: '04d' },
                { day: 'Fri', temp: 30, icon: '09d' },
            ]);
        } catch (error) {
            console.error('Failed to fetch weather data');
        }
    };

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={darkMode ? 'app-container dark-mode' : 'app-container'}>
            <button className="toggle-button" onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <h1 className="weather-header">Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            <WeatherDisplay weather={weather} forecast={forecast} />
        </div>
    );
};

export default App;
