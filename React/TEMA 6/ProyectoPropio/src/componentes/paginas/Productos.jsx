import React from 'react'
import ProductosFuncionalidades from '../productos/ProductosFuncionalidades.jsx'
import ListaProductos from '../productos/ListaProductos.jsx'
import './Productos.css'
import ListadoEstadisticas from '../productos/ListadoEstadisticas.jsx'

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
                <div className='productos-estadisticas'>
                    <ListadoEstadisticas/>
                </div>
            </div>
        </>
    )
}

export default Productos