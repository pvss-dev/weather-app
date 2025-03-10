import React, { useState } from "react";
import "../style/SearchInput.css";

interface SearchInputProps {
    fetchCityWeather: (cityName: string) => void;
    error: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({ fetchCityWeather, error }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            fetchCityWeather(searchTerm);
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