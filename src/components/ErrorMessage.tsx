import React from 'react';

const ErrorMessage: React.FC = () => {
    return (
        <>
            <section className="not-found section-message">
                <img src="src/assets/img/not-found.png" alt="Não encontrado" />
            </section>
        </>
    );
};

export default ErrorMessage;