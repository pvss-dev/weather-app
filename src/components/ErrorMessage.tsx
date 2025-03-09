import React from 'react';
import '../style/ErrorMessage.css';

const Message: React.FC = () => {
    return (
        <>
            <section className="not-found section-message" style={{ display: 'none' }}>
                <img src="src/assets/img/not-found.png" alt="Não encontrado" />
            </section>
        </>
    );
};

export default Message;