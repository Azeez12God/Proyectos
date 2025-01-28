import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <Link to="/" className="error-link">Volver a la página de inicio</Link>
        </div>
    );
}

export default Error;