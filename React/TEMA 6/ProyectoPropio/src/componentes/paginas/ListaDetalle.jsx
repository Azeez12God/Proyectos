import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useProveedorListas from '../hooks/useProveedorListas';
import ListaProductosLista from '../listas_productos/ListaProductosLista';
import './ListaDetalle.css'

const ListaDetalle = () => {
    const {id} = useParams();
    const {obtenerProductosLista, obtenerLista, lista} = useProveedorListas();

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