import React from 'react';
import '../style/WeatherInfo.css';
import Message from './Message';
import ErrorMessage from './ErrorMessage';

const WeatherInfo: React.FC = () => {
    return (
        <>
            <section className="weather-info" style={{ display: 'none' }}>
                <div className="location-date-container">
                    <div className="location">
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <h4 className="country-txt">Cáceres</h4>
                    </div>
                    <h5 className="current-date-txt regular-txt">Terça-feira, 25 Fev</h5>
                </div>
                <div className="weather-summary-container">
                    <img src="src/assets/img/clouds.svg" alt="clouds" className="weather-summary-img" />
                    <div className="weather-summary-info">
                        <h1 className="temp-txt">29 °C</h1>
                        <h3 className="condition-txt regular-txt">Nublado</h3>
                    </div>
                </div>
                <div className="weather-conditions-container">
                    <div className="condition-item">
                        <span className="material-symbols-outlined">
                            water_drop
                        </span>
                        <div className="condition-info">
                            <h5 className="regular-txt">Humidity</h5>
                            <h5 className="humidity-value-txt">55%</h5>
                        </div>
                    </div>
                    <div className="condition-item">
                        <span className="material-symbols-outlined">
                            air
                        </span>
                        <div className="condition-info">
                            <h5 className="regular-txt">Wind Speed</h5>
                            <h5 className="wind-value-txt">10 km/h</h5>
                        </div>
                    </div>
                </div>
                <div className="forecast-items-container">
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img"/>
                        <h5 className="forecast-item-temp">29 °C</h5>
                    </div>
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img"/>
                        <h5 className="forecast-item-temp">29 °C</h5>
                    </div>
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img"/>
                        <h5 className="forecast-item-temp">29 °C</h5>
                    </div>
                    <div className="forecast-item">
                        <h5 className="forecast-item-date regular-txt">05 Aug</h5>
                        <img src="src/assets/img/thunderstorm.svg" alt="thunderstorm" className="forecast-item-img"/>
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