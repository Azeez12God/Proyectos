import React from 'react'
import Errores from '../estructura/Errores.jsx';
import Producto from '../productos/Producto.jsx';
import { generarUuidAleatorio } from '../../bibliotecas/biblioteca.js';
import ProductoAgregar from '../productos/ProductoAgregar.jsx';
import useProveedorCompra from '../hooks/useProveedorCompra.js';

const ListaProductosLista = () => {
    const {productosLista} = useProveedorCompra();

    return (
        <>
            {productosLista.length > 0 && Array.isArray(productosLista) ?      
            productosLista.map((productolista)=>{
                return <Producto key={generarUuidAleatorio()} datos={productolista.Productos} esListaCompra={true} cantidad={productolista.cantidad}/>
            })
            : <Errores>No hay productos en la lista.</Errores>
            }
            <ProductoAgregar/>
        </>
    )
}

export default ListaProductosLista