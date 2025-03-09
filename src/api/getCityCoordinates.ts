const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/geo/1.0";

export interface CityCoordinates {
    name: string;
    country: string;
    lat: number;
    lon: number;
};

export interface OpenWeatherResponse {
    name: string;
    country: string;
    lat: number;
    lon: number;
};

export const getCityCoordinates = async (
    city: string,
    state?: string,
    country?: string
): Promise<CityCoordinates> => {
    if (!API_KEY) {
        throw new Error("API Key não definida.");
    }

    if (!city.trim()) {
        throw new Error("Nome da cidade é obrigatório.");
    }

    const queryParts = [city];
    if (state) queryParts.push(state);
    if (country) queryParts.push(country);
    const queryParam = encodeURIComponent(queryParts.join(","));

    const url = `${BASE_URL}/direct?q=${queryParam}&limit=1&appid=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Erro na requisição: ${response.statusText}");
    }

    const data: OpenWeatherResponse[] = await response.json();

    if (!data || data.length === 0) {
        throw new Error("Cidade não encontrada.");
    }

    return {
        name: data[0].name,
        country: data[0].country,
        lat: data[0].lat,
        lon: data[0].lon
    };
};