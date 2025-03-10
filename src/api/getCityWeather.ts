const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/3.0";

export interface CityWeatherData {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current?: {
        dt: number;
        sunrise: number;
        sunset: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        rain?: {
            "1h": number;
        };
        snow?: {
            "1h": number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        formattedTemp: number;
        formattedDescription: string;
        formattedWindSpeed: string;
    };
    minutely?: {
        dt: number;
        precipitation: number;
    };
    hourly?: {
        dt: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        rain?: {
            "1h": number;
        }
        snow?: {
            "1h": number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        pop: number;
    };
    daily?: {
        dt: number;
        sunrise: number;
        sunset: number;
        moonrise: number;
        moonset: number;
        moon_phase: number;
        summary: string;
        temp: {
            day: number;
            min: number;
            max: number;
            night: number;
            eve: number;
            morn: number;
        };
        feels_like: {
            day: number;
            night: number;
            eve: number;
            morn: number;
        };
        pressure: number;
        humidity: number;
        dew_point: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        clouds: number;
        pop: number;
        uvi: number;
        rain: number;
        snow: number;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
    };
    alerts?: {
        sender_name: string;
        event: string;
        start: number;
        end: number;
        description: string;
        tags: string;
    };
};

export const getCityWeather = async (
    lat: number,
    lon: number,
    options?: {
        exclude?: string;
        units?: string;
        lang?: string;
    }
): Promise<CityWeatherData> => {
    if (!API_KEY) {
        throw new Error("API Key não definida.");
    }

    const params = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        appid: API_KEY
    });

    if (options?.exclude) params.append("exclude", options.exclude);
    if (options?.units) params.append("units", options.units);
    if (options?.lang) params.append("lang", options.lang);

    const url = `${BASE_URL}/onecall?${params.toString()}`;

    const response = await fetch(url);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro na requisição: ${response.statusText}. Detalhes: ${errorText}`);
    }

    const data: CityWeatherData = await response.json();

    if (data.current) {
        const weather = data.current.weather[0] || { description: "", icon: "" };

        data.current.formattedTemp = Math.round(data.current.temp);
        data.current.formattedDescription =
            weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
        data.current.formattedWindSpeed = `${(data.current.wind_speed * 3.6).toFixed(2)} km/h`;
    }
    return data;
};