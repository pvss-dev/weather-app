import React from 'react';
import '../style/Message.css';

const Message: React.FC = () => {
    return (
        <>
            <section className="search-city section-message">
                <img src="src/assets/img/search-city.png" alt="Procurar" />

                <div>
                    <h1>Pesquisar Cidade</h1>
                    <h4 className="regular-txt">
                        Descubra as condições climáticas da cidade
                    </h4>
                </div>
            </section>
        </>
    );
};

export default Message;