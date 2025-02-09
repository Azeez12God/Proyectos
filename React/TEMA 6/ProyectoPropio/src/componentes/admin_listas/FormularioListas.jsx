import React from 'react'
import useProveedorListas from '../hooks/useProveedorListas.js'
import Errores from '../estructura/Errores.jsx';
import useProveedorSesion from '../hooks/useProveedorSesion.js';
import './FormularioListas.css';

const FormularioListas = () => {
    const {actualizarLista, lista, errorLista, insertarLista} = useProveedorListas();
    const {usuario} = useProveedorSesion();

    return (
        <>
            <div className='formularioListas-contenedor'>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" onChange={(e)=>{actualizarLista(e)}} name='nombre' value={lista.nombre || ''}/>
                {errorLista && <Errores>{errorLista}</Errores>}
                <button onClick={()=>{insertarLista(usuario)}}>
                    Insertar
                </button>
            </div>
        </>
    )
}

export default FormularioListas