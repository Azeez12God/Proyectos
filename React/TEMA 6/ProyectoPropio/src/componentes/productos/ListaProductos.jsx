import React from 'react'
import Producto from './Producto.jsx';
import Errores from '../estructura/Errores.jsx';
import useProveedorProductos from '../hooks/useProveedorProductos.js';

const ListaProductos = ({agregarProducto}) => {
    const {productosFiltrados} = useProveedorProductos();

    return (
        <>
            {productosFiltrados.length>0 && Array.isArray(productosFiltrados) ? 
                productosFiltrados.map((producto)=>{
                    return <Producto key={producto.id} datos={producto} agregarProducto={agregarProducto}/>
                })
                : <Errores>No hay productos</Errores>
            }
        </>
    )
}

export default ListaProductos