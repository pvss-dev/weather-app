import React from 'react';
import '../style/WeatherInfo.css';

const WeatherInfo: React.FC = () => {
    return (
        <>
            <section className="weather-info">
                <div className="location-date-container">
                    <div className="location">
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <h4 className="country-txt">Cáceres</h4>
                    </div>
                    <h5 className="current-date-txt">Terça-feira, 25 Fev</h5>
                </div>

            </section>
        </>
    );
};

export default WeatherInfo;