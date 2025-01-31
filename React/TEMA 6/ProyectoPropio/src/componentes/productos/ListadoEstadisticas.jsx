import React, { useContext } from 'react'
import { contextoProductos } from '../../contextos/ProveedorProductos'

const ListadoEstadisticas = () => {
    const {productosFiltrados} = useContext(contextoProductos);

    const calcularPrecioMedio = (productos) => {   
        let sumaPrecios = 0;
        for (let i = 0; i < productos.length; i++) {
            sumaPrecios += productos[i].precio;
        }
    
        return (sumaPrecios / productos.length).toFixed(2);
    };

    return (
        <>
            <p>Número de productos en el listado: {productosFiltrados.length && Array.isArray(productosFiltrados) ? productosFiltrados.length : 0}</p>
            <p>Media de precios de los productos en el listado: {productosFiltrados.length && Array.isArray(productosFiltrados) ? calcularPrecioMedio(productosFiltrados) : 0}</p>
        </>
    )
}

export default ListadoEstadisticas