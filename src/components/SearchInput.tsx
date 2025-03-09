import React, { useState } from "react";
import "../style/SearchInput.css";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Pesquisando por:", searchTerm);
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