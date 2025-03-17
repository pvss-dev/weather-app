import React, { useState } from "react";
import "../style/SearchInput.css";

interface SearchInputProps {
    fetchCityWeather: (cityName: string) => void;
    fetchWeatherByLocation: () => void;
    error: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({ fetchCityWeather, fetchWeatherByLocation, error }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFetching, setIsFetching] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (!searchTerm.trim()) return;

        let formattedSearch = searchTerm.trim();

        if (!formattedSearch.includes(",")) {
            formattedSearch = formattedSearch.replace(/\s+/, ", ");
        }

        fetchCityWeather(formattedSearch);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSearch();
        }
    }

    const handleLocationSearch = async () => {
        try {
            setIsFetching(true);
            await fetchWeatherByLocation();
        } catch (error) {
            alert(error);
        } finally {
            setIsFetching(false);
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
                    onKeyDown={handleKeyDown}
                />
                <button className="search-btn" onClick={handleSearch} type="button">
                    <span className="material-symbols-outlined">search</span>
                </button>
                <button className="location-btn" onClick={handleLocationSearch} type="button" disabled={isFetching}>
                    <span className="material-symbols-outlined">
                        {isFetching ? "sync" : "my_location"}
                    </span>
                </button>
            </header>

            {error && <p className="error-message">{error}</p>}
        </>
    );
};

export default SearchInput;