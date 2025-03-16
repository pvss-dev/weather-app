import React from "react";


import { getWeatherIconUrl } from "../api/getWeatherIcon";
import { CityWeatherData } from "../api/getCityWeather";

interface ForecastProps {
    daily: CityWeatherData["daily"];
}

const Forecast: React.FC<ForecastProps> = ({ daily }) => {
    if (!daily) return null;

    const forecastData = daily.slice(1, 8).map((day) => ({
        date: day.formattedDate,
        maxTemp: Math.round(day.temp.max),
        iconUrl: getWeatherIconUrl(day.weather[0]?.icon),
        description: day.weather[0]?.description,
    }));

    return (
        <div className="forecast-items-container">
            {forecastData.map((day, index) => (
                <div key={index} className="forecast-item">
                    <h5 className="forecast-item-date regular-txt">{day.date}</h5>
                    <img src={day.iconUrl} alt={day.description} className="forecast-item-img" />
                    <h5 className="forecast-item-temp">{day.maxTemp} °C</h5>
                </div>
            ))}
        </div>
    );
};

export default Forecast;