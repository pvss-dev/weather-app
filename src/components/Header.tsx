import React from 'react';
import '../style/Header.css';

const Header: React.FC = () => {
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

export default Header;