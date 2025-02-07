import React from 'react'
import ListaProductos from '../productos/ListaProductos.jsx'
import './AgregarProductos.css'
import ListaProductosLista from './ListaProductosLista';

const AgregarProductos = () => {
    return (
        <>
            <div className='agregar-productos-contenedor'>
                <div className='agregar-productos-lista-productos'>
                    <ListaProductos/>
                </div>
                <div className='agregar-productos-lista-lista'>
                    <ListaProductosLista agregando={true}/>
                </div>
            </div>
        </>
    )
}

export default AgregarProductos