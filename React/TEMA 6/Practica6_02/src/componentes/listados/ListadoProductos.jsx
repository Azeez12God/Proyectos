import React, { useContext } from 'react'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx'
import ListadoProducto from './ListadoProducto.jsx';

const ListadoProductos = () => {
    const {productosFiltrados}  = useContext(contextoProductos);

    return (
        <>
            {productosFiltrados.length>0 && Array.isArray(productosFiltrados) ?
                productosFiltrados.map((producto)=>{
                    return <ListadoProducto key={producto.id} datos={producto}/>
                })
                : "No hay productos"
            }
        </>
    )
}

export default ListadoProductos