import React, { useContext } from 'react'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx';
import './FormularioProductos.css'
import Errores from '../estructura/Errores';

const FormularioProductos = ({editar}) => {
    const {producto, actualizarProducto, insertarProducto, errorProductos, editarProducto} = useContext(contextoProductos);

    return (
        <>
            <div className='formularioProducto-contenedor'>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name='nombre' value={producto.nombre || ''} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="precio">Precio: </label>
                <input type="number" name='precio' value={producto.precio || ''} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="peso">Peso: </label>
                <input type="number" name='peso' value={producto.peso || ''} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="descripcion">Descripción: </label>
                <textarea name='descripcion' value={producto.descripcion || ''} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="imagen">URL imagen: </label>
                <input type="text" name='imagen' value={producto.imagen || ''} 
                    onChange={(e)=>actualizarProducto(e)} />
                {errorProductos && <Errores>{errorProductos}</Errores>}    

                <button onClick={()=>{editar ? editarProducto() : insertarProducto()}}>
                    {editar ? "Editar" : "Insertar"}
                </button>
            </div>
        </>
    )
}

export default FormularioProductos