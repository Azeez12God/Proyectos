import React, { useContext } from 'react'
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';
import './CerrarSesion.css'

const CerrarSesion = () => {
    const {cerrarSesion} = useContext(contextoSesion);
    return (
        <>
            <div className='cerrarsesion_contenedor'>
                <button
                className='cerrarsesion_boton'
                    onClick={() => {
                    cerrarSesion();
                    }}
                >
                    Cerrar sesión
                </button>
            </div>
        </>
    )
}

export default CerrarSesion