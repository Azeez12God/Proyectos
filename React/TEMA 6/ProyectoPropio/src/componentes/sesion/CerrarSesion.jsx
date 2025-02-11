import React from 'react'
import './CerrarSesion.css'
import useProveedorSesion from '../hooks/useProveedorSesion.js';

const CerrarSesion = () => {
    const {cerrarSesion} = useProveedorSesion();
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