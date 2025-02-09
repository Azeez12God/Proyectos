import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useProveedorListas from '../hooks/useProveedorListas';
import ListaProductosLista from '../listas_productos/ListaProductosLista.jsx';
import './ListaDetalle.css'
import useProveedorCompra from '../hooks/useProveedorCompra.js';
import ListaEstadisticas from '../lista/ListaEstadisticas.jsx';

const ListaDetalle = () => {
    const {id} = useParams();
    const {obtenerLista, lista} = useProveedorListas();
    const {obtenerProductosLista} = useProveedorCompra();

    useEffect(()=>{
        obtenerProductosLista(id);
        obtenerLista(id);
    }, []);

    return (
        <div className='lista-detalle'>
            <h2>{lista.nombre}</h2>
            <div className='lista-productos'>
                <ListaProductosLista/>
            </div>
            <div className='lista-estadisticas'>
                <ListaEstadisticas/>
            </div>
        </div>
    )
}

export default ListaDetalle