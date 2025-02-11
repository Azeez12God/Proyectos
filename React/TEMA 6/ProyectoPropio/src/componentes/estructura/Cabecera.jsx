import React from 'react'
import { Link } from 'react-router-dom';
import './Cabecera.css'
import CerrarSesion from '../sesion/CerrarSesion.jsx';
import useProveedorSesion from '../hooks/useProveedorSesion.js';

const Cabecera = () => {
    const {sesionIniciada, usuario} = useProveedorSesion();
    return (
        <>
            <header className='cabecera'>
                <h1>Creación de listas de la compra</h1>
                {sesionIniciada && <>
                    <p>¡Hola {usuario.email}!</p>
                    <CerrarSesion/>
                </>}
                {sesionIniciada ? "": <Link to='/login'>Iniciar sesión</Link>}
            </header>
        </>
    )
}

export default Cabecera