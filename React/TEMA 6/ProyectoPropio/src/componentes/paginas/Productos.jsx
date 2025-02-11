import React from 'react'
import ProductosFuncionalidades from '../productos/ProductosFuncionalidades.jsx'
import ListaProductos from '../productos/ListaProductos.jsx'
import './Productos.css'
import ListadoEstadisticas from '../productos/ListadoEstadisticas.jsx'
import Errores from '../estructura/Errores.jsx'
import useProveedorProductos from '../hooks/useProveedorProductos.js'

const Productos = () => {
    const {errorProducto} = useProveedorProductos();
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
                {errorProducto && <Errores>{errorProducto}</Errores>}
            </div>
        </>
    )
}

export default Productos