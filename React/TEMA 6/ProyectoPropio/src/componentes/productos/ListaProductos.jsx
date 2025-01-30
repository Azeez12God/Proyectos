import React, { useContext } from 'react'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx'
import Producto from './Producto.jsx';
import Errores from '../estructura/Errores.jsx';

const ListaProductos = () => {
    const {productosFiltrados} = useContext(contextoProductos);

    return (
        <>
            {productosFiltrados.length>0 && Array.isArray(productosFiltrados) ? 
                productosFiltrados.map((producto)=>{
                    return <Producto key={producto.id} datos={producto}/>
                })
                : <Errores>No hay productos</Errores>
            }
        </>
    )
}

export default ListaProductos