import React from 'react';
import '../style/WeatherInfo.css';
import Message from './Message';
import ErrorMessage from './ErrorMessage';
import { CityCoordinates } from '../api/getCityCoordinates';
import { CityWeatherData } from '../api/getCityWeather';
import { getWeatherIconUrl } from '../api/getWeatherIcon.ts';

interface WeatherInfoProps {
    cityData: CityCoordinates | null;
    weatherData: CityWeatherData | null;
    error: string | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
    cityData,
    weatherData,
    error
}) => {

    if (error) {
        return <ErrorMessage />;
    }
    if (!cityData || !weatherData) {
        return <Message />;
    }

    if (!weatherData?.current?.weather?.length) {
        return null;
    }

    const { name, country } = cityData;
    const { current, daily } = weatherData;

    const iconCode = weatherData.current.weather[0].icon;
    const iconUrl = getWeatherIconUrl(iconCode);


    return (
        <>
            <section className="weather-info">
                <div className="location-date-container">
                    <div className="location">
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <h4 className="country-txt">{name}, {country}</h4>
                    </div>
                    <h5 className="current-date-txt regular-txt">Terça-feira, 25 Fev</h5>
                </div>
                <div className="weather-summary-container">
                    {current && (
                        <>
                            <img
                                src={iconUrl}
                                alt={weatherData.current?.formattedDescription}
                                className="weather-summary-img"
                            />
                            <div className="weather-summary-info">
                                <h1 className="temp-txt">{weatherData.current?.formattedTemp} °C</h1>
                                <h3 className="condition-txt regular-txt">
                                    {weatherData.current?.formattedDescription}
                                </h3>
                            </div>
                        </>
                    )}

                </div>
                <div className="weather-conditions-container">
                    <div className="condition-item">
                        <span className="material-symbols-outlined">
                            water_drop
                        </span>
                        <div className="condition-info">
                            <h5 className="regular-txt">Umidade</h5>
                            {current && <h5 className="humidity-value-txt">{current.humidity}%</h5>}
                        </div>
                    </div>
                    <div className="condition-item">
                        <span className="material-symbols-outlined">
                            air
                        </span>
                        <div className="condition-info">
                            <h5 className="regular-txt">Wind Speed</h5>
                            {current && <h5 className="wind-value-txt">{weatherData.current?.formattedWindSpeed}</h5>}
                        </div>
                    </div>
                </div>
                <div className="forecast-items-container">
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img" />
                        <h5 className="forecast-item-temp">29 °C</h5>
                    </div>
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img" />
                        <h5 className="forecast-item-temp">29 °C</h5>
                    </div>
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img" />
                        <h5 className="forecast-item-temp">29 °C</h5>
                    </div>
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img" />
                        <h5 className="forecast-item-temp">29 °C</h5>
                    </div>
                </div>
            </section>
            <Message />
            <ErrorMessage />
        </>
    );
};

export default WeatherInfo;