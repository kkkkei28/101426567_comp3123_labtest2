import React from 'react';
import ForecastCard from './ForecastCard';
import { WiDaySunny } from 'react-icons/wi'; // Only keep WiDaySunny since it's used

const WeatherDisplay = ({ weather, forecast }) => {
    if (!weather) return null;

    const { name, main, weather: weatherDetails, sys } = weather;

    // Function to determine the background style based on weather condition
    const getBackgroundStyle = (condition) => {
        switch (condition) {
            case 'Clear':
                return {
                    background: 'linear-gradient(to bottom, #FFD700, #FF4500)',
                    color: 'white',
                };
            case 'Clouds':
                return {
                    background: 'linear-gradient(to bottom, #B0C4DE, #778899)',
                    color: 'white',
                };
            case 'Rain':
                return {
                    background: 'linear-gradient(to bottom, #1E90FF, #4682B4)',
                    color: 'white',
                };
            case 'Snow':
                return {
                    background: 'linear-gradient(to bottom, #ADD8E6, #FFFFFF)',
                    color: 'black',
                };
            default:
                return {
                    background: 'linear-gradient(to bottom, #87CEEB, #4682B4)',
                    color: 'white',
                };
        }
    };

    const backgroundStyle = getBackgroundStyle(weatherDetails[0].main);

    return (
        <div className="weather-result" style={backgroundStyle}>
            <div className="weather-details">
                <div>
                    <h2>{name}</h2>
                    <p><strong>Temperature:</strong> {main.temp}°C</p>
                    <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
                    <p><strong>Humidity:</strong> {main.humidity}%</p>
                    <p><strong>Condition:</strong> {weatherDetails[0].description}</p>
                    <p><strong>Sunrise:</strong> {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p><strong>Sunset:</strong> {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
                <WiDaySunny className="weather-icon" style={{ fontSize: '60px' }} />
            </div>
            <div className="forecast-container">
                {forecast.map((day, index) => (
                    <ForecastCard
                        key={index}
                        day={day.day}
                        temp={day.temp}
                        icon={day.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeatherDisplay;
