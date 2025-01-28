import React from 'react';
import { Link } from 'react-router-dom';
import './Pie.css';

const Pie = () => {
    return (
        <footer className="pie">
            <p>&copy; {new Date().getFullYear()} Lista de Productos. Todos los derechos reservados.</p>
            <div className="pie-enlaces">
                <Link to="/terminos" className="pie-enlace">Términos de Servicio</Link>
                <Link to="/privacidad" className="pie-enlace">Política de Privacidad</Link>
            </div>
        </footer>
    );
}

export default Pie;