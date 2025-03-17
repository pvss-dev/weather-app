import React from 'react';
import '../style/WeatherInfo.css';
import Message from './Message';
import ErrorMessage from './ErrorMessage';
import { CityCoordinates } from '../api/getCityCoordinates';
import { CityWeatherData } from '../api/getCityWeather';
import { getWeatherIconUrl } from '../api/getWeatherIcon.ts';
import Forecast from "./Forecast";

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

    if (error) return <ErrorMessage />;
    if (!cityData || !weatherData) return <Message />;

    const { name, country } = cityData;
    const { current, daily } = weatherData;

    if (!current?.weather?.length) return null;

    const { humidity, formattedDescription, formattedTemp, formattedWindSpeed, weather } = current;
    const iconUrl = getWeatherIconUrl(weather[0].icon);

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
                    <h5 className="current-date-txt regular-txt">{current.formattedDate}</h5>
                </div>
                <div className="weather-summary-container">
                    {current && (
                        <>
                            <img
                                src={iconUrl}
                                alt={formattedDescription}
                                className="weather-summary-img"
                            />
                            <div className="weather-summary-info">
                                <h1 className="temp-txt">{formattedTemp} °C</h1>
                                <h3 className="condition-txt regular-txt">
                                    {formattedDescription}
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
                            {current && <h5 className="humidity-value-txt">{`${humidity}%`}</h5>}
                        </div>
                    </div>
                    <div className="condition-item">
                        <span className="material-symbols-outlined">
                            air
                        </span>
                        <div className="condition-info">
                            <h5 className="regular-txt">Vel. do Vento</h5>
                            {current && <h5 className="wind-value-txt">{formattedWindSpeed || ""}</h5>}
                        </div>
                    </div>
                </div>
                <Forecast daily={daily} />
            </section>
        </>
    );
};

export default WeatherInfo;