import React from 'react';
import '../style/Card.css';
import WeatherInfo from "./WeatherInfo.tsx";
import SearchInput from './SearchInput.tsx';
import { useCityWeather } from '../hooks/useCityWeather';

const Card: React.FC = () => {
    const { cityData, weatherData, error, fetchCityWeather } = useCityWeather();

    return (
        <>
            <main className="main-container">
                <SearchInput fetchCityWeather={fetchCityWeather} error={error} />
                <WeatherInfo cityData={cityData} weatherData={weatherData} error={error} />
            </main>
        </>
    );
};

export default Card;