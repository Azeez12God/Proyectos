import React from 'react'
import Errores from '../estructura/Errores.jsx';
import Producto from '../productos/Producto.jsx';
import { generarUuidAleatorio } from '../../bibliotecas/biblioteca.js';
import ProductoAgregar from '../productos/ProductoAgregar.jsx';
import useProveedorCompra from '../hooks/useProveedorCompra.js';

const ListaProductosLista = ({agregando}) => {
    const {productosLista, errorCompra} = useProveedorCompra();

    return (
        <>
            {!agregando && <ProductoAgregar/>}
            {productosLista.length > 0 && Array.isArray(productosLista) &&     
            productosLista.map((productolista)=>{
                return <Producto key={generarUuidAleatorio()} datos={productolista.Productos} esListaCompra={true} cantidad={productolista.cantidad}/>
            })
            }

            {errorCompra && <Errores>{errorCompra}</Errores>}
        </>
    )
}

export default ListaProductosLista