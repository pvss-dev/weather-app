import React from 'react';
import '../style/SearchInput.css';

const SearchInput: React.FC = () => {
    return (
        <>
            <header className="input-container">
                <input className="city-input" placeholder="Pesquisar Cidade"/>
                <button className="search-btn">
                    <span className="material-symbols-outlined">search</span>
                </button>
            </header>
        </>
    );
};

export default SearchInput;