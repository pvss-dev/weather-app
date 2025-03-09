import React, { useState } from "react";
import "../style/SearchInput.css";
import { getCityCoordinates, CityCoordinates } from "../api/getCityCoordinates";
import { getCityWeather, CityWeatherData } from "../api/getCityWeather";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [cityData, setCityData] = useState<CityCoordinates | null>(null);

  const [weatherData, setWeatherData] = useState<CityWeatherData | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const data = await getCityCoordinates(searchTerm);
      setCityData(data);
      console.log("Resultado da pesquisa:", data);

      if (data) {
        const weather = await getCityWeather(data.lat, data.lon, {
          units: "metric",
          lang: "pt_br",
        });
        setWeatherData(weather);
        console.log("Dados do clima:", weather);
      }
    } catch (erro: any) {
      console.error("Erro:", erro);
    }
  };

  return (
    <>
      <header className="input-container">
        <input
          className="city-input"
          placeholder="Pesquisar Cidade"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>
    </>
  );
};

export default SearchInput;