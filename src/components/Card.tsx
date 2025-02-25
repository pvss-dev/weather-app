import React from 'react';
import '../style/Card.css';
import Header from "./Header.tsx";
import WeatherInfo from "./WeatherInfo.tsx";

const Card: React.FC = () => {
    return (
        <>
            <main className="main-container">
                <Header/>
                <WeatherInfo/>
            </main>
        </>
    );
};

export default Card;