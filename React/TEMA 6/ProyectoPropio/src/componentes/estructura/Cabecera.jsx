import React from 'react'
import { useContext } from 'react'
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx'
import { Link } from 'react-router-dom';
import './Cabecera.css'
import CerrarSesion from '../sesion/CerrarSesion.jsx';

const Cabecera = () => {
    const {sesionIniciada, usuario} = useContext(contextoSesion);
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