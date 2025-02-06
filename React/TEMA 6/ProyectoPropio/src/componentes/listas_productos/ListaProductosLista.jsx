    import React from 'react'
    import useProveedorListas from '../hooks/useProveedorListas.js';
    import Errores from '../estructura/Errores.jsx';
    import Producto from '../productos/Producto.jsx';
    import { generarUuidAleatorio } from '../../bibliotecas/biblioteca.js';

    const ListaProductosLista = () => {
        const {productosLista} = useProveedorListas();

        return (
            <>
                {productosLista.length > 0 && Array.isArray(productosLista) ?      
                productosLista.map((productolista)=>{
                    return <Producto key={generarUuidAleatorio()} datos={productolista.Productos} esListaCompra={true} cantidad={productolista.cantidad}/>
                })
                : <Errores>No hay productos en la lista.</Errores>
                }
            </>
        )
    }

    export default ListaProductosLista