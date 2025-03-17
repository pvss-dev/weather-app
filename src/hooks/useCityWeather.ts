import { useState } from "react";
import { getCityCoordinates, CityCoordinates } from "../api/getCityCoordinates";
import { getCityWeather, CityWeatherData } from "../api/getCityWeather";
import { getCityCoordinatesBrowser } from "../api/getCityCoordinatesBrowser";

export const useCityWeather = () => {
    const [cityData, setCityData] = useState<CityCoordinates | null>(null);
    const [weatherData, setWeatherData] = useState<CityWeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchCityWeather = async (cityName: string) => {
        try {
            setError(null);
            const data = await getCityCoordinates(cityName);
            setCityData(data);

            if (data) {
                const weather = await getCityWeather(data.lat, data.lon, {
                    units: "metric",
                    lang: "pt_br"
                });
                setWeatherData(weather);
            }
        } catch (err) {
            setError("Erro ao buscar os dados. Verifique o nome da cidade.");
        }
    };

    const fetchWeatherByLocation = async () => {
        try {
            setError(null);
            const { lat, lon, city, country } = await getCityCoordinatesBrowser();

            setCityData({
                name: city ?? "Localização Desconhecida",
                country: country ?? "Desconhecido",
                lat,
                lon
            });

            const weather = await getCityWeather(lat, lon, {
                units: "metric",
                lang: "pt_br"
            });

            setWeatherData({ ...weather });
        } catch (err) {
            setError("Erro ao obter a localização.");
        }
    };

    return { cityData, weatherData, error, fetchCityWeather, fetchWeatherByLocation };
};