const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/geo/1.0/reverse";

interface Coordinates {
    lat: number;
    lon: number;
    city?: string;
    country?: string;
}

export const getCityCoordinatesBrowser = async (): Promise<Coordinates> => {
    if (!("geolocation" in navigator)) {
        throw new Error("Geolocalização não é suportada pelo seu navegador.");
    }

    return new Promise<Coordinates>((resolve) => {
        navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
                const { latitude: lat, longitude: lon } = coords;

                try {
                    const response = await fetch(
                        `${BASE_URL}?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
                    );

                    if (!response.ok) {
                        throw new Error("Falha ao buscar dados da localização.");
                    }

                    const data = await response.json();
                    const city = data?.[0]?.name || "Localização Desconhecida";
                    const country = data?.[0]?.country || "Desconhecido";

                    resolve({ lat, lon, city, country });
                } catch (error) {
                    console.error("Erro ao obter cidade:", error);
                    resolve({ lat, lon, city: "Localização Desconhecida", country: "Desconhecido" });
                }
            },
            (error) => {
                console.error("Erro ao obter localização:", error);
            }
        );
    });
};