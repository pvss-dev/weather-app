import React, { useState } from "react";
import "../style/SearchInput.css";
import { getCityCoordinates } from "../api/getCityCoordinates";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [cityData, setCityData] = useState<{
    name: string;
    country: string;
    lat: number;
    lon: number;
  } | null>(null);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const data = await getCityCoordinates(searchTerm);
      setCityData(data);
      console.log("Resultado da pesquisa:", data);
    } catch (err: any) {
      console.error("Erro:", err);
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