import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useProveedorListas from '../hooks/useProveedorListas';
import ListaProductosLista from '../listas_productos/ListaProductosLista.jsx';
import './ListaDetalle.css'
import useProveedorCompra from '../hooks/useProveedorCompra.js';

const ListaDetalle = () => {
    const {id} = useParams();
    const {obtenerLista, lista} = useProveedorListas();
    const {obtenerProductosLista} = useProveedorCompra();

    useEffect(()=>{
        obtenerProductosLista(id);
        obtenerLista(id);
    }, []);

    return (
        <>
            <h2>{lista.nombre}</h2>
            <div className='lista-productos'>
                <ListaProductosLista/>
            </div>
        </>
    )
}

export default ListaDetalle