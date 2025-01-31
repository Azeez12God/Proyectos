import React, { useContext } from 'react'
import { contextoProductos } from '../../contextos/ProveedorProductos';
import './FormularioProductos.css'

const FormularioProductos = () => {
    const {producto, actualizarProducto} = useContext(contextoProductos);

    return (
        <>
            <div className='formularioProducto-contenedor'>
                <label htmlFor="name">Nombre: </label>
                <input type="text" name='name' value={producto.nombre || ""} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="price">Precio: </label>
                <input type="number" name='price' value={producto.precio || ""} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="weight">Peso: </label>
                <input type="number" name='weight' value={producto.peso || ""} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="description">Descripción: </label>
                <textarea name='description' value={producto.descripcion || ""} 
                    onChange={(e)=>actualizarProducto(e)} />
                <label htmlFor="image">URL imagen: </label>
                <input type="text" name='image' value={producto.imagen || ""} 
                    onChange={(e)=>actualizarProducto(e)} />

                <button>Insertar</button>
            </div>
        </>
    )
}

export default FormularioProductos