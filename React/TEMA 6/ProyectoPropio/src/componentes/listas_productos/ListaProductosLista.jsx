import React from 'react'
import Errores from '../estructura/Errores.jsx';
import { generarUuidAleatorio } from '../../bibliotecas/biblioteca.js';
import ProductoAgregar from '../productos/ProductoAgregar.jsx';
import useProveedorCompra from '../hooks/useProveedorCompra.js';
import ProductoLista from './ProductoLista.jsx';

const ListaProductosLista = ({agregando, agregarProducto}) => {
    const {productosLista, errorCompra} = useProveedorCompra();

    return (
        <>
            {!agregando && <ProductoAgregar/>}
            {productosLista.length > 0 && Array.isArray(productosLista) &&     
            productosLista.map((productolista)=>{
                return <ProductoLista key={generarUuidAleatorio()} datos={productolista} agregarProducto={agregarProducto}/>
            })
            }

            {errorCompra && <Errores>{errorCompra}</Errores>}
        </>
    )
}

export default ListaProductosLista