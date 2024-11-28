import React from 'react';

const ForecastCard = ({ day, temp, icon }) => {
    return (
        <div className="forecast-card">
            <h4>{day}</h4>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
            <p>{temp}°C</p>
        </div>
    );
};

export default ForecastCard;
