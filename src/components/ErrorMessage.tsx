import React from 'react';
import '../style/ErrorMessage.css';

const Message: React.FC = () => {
    return (
        <>
            <section className="not-found section-message" style={{ display: 'none' }}>
                <img src="src/assets/img/not-found.png" alt="Not Found"/>

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