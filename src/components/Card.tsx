import React from 'react';
import '../style/Card.css';
import WeatherInfo from "./WeatherInfo.tsx";
import SearchInput from './SearchInput.tsx';

const Card: React.FC = () => {
    return (
        <>
            <main className="main-container">
                <SearchInput />
                <WeatherInfo />
            </main>
        </>
    );
};

export default Card;