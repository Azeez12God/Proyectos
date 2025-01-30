import React from 'react'
import ProductosFuncionalidades from '../productos/ProductosFuncionalidades.jsx'
import ListaProductos from '../productos/ListaProductos.jsx'
import './Productos.css'

const Productos = () => {
    return (
        <>
            <div className='productos-contenedor'>
                <div className='productos-funcionalidades'>
                    <ProductosFuncionalidades/>
                </div>
                <div className='productos-listado'>
                    <ListaProductos/>
                </div>
            </div>
        </>
    )
}

export default Productos