const BASE_URL = "https://openweathermap.org/img/wn/";

/**
 * Retorna a URL do ícone de clima com base no código fornecido.
 * @param iconCode - Código do ícone recebido na resposta da API (ex: "10d" ou "04n")
 * @param size - Tamanho do ícone (padrão: 2 para "@2x")
 * @returns URL completa do ícone
 */
export const getWeatherIconUrl = (iconCode: string, size: number = 2): string => {
    return `${BASE_URL}${iconCode}@${size}x.png`;
};