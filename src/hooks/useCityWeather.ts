import { useState } from "react";
import { getCityCoordinates, CityCoordinates } from "../api/getCityCoordinates";
import { getCityWeather, CityWeatherData } from "../api/getCityWeather";

export const useCityWeather = () => {
    const [cityData, setCityData] = useState<CityCoordinates | null>(null);
    const [weatherData, setWeatherData] = useState<CityWeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchCityWeather = async (cityName: string) => {
        try {
            setError(null);
            const data = await getCityCoordinates(cityName);
            setCityData(data);
            console.log("Resultado da pesquisa:", data);

            if (data) {
                const weather = await getCityWeather(data.lat, data.lon, {
                    units: "metric",
                    lang: "pt_br"
                });
                setWeatherData(weather);
                console.log("Dados do clima:", weather);
            }
        } catch (err) {
            setError("Erro ao buscar os dados. Verifique o nome da cidade.");
            console.error("Erro:", err);
        }
    };

    return { cityData, weatherData, error, fetchCityWeather };
};