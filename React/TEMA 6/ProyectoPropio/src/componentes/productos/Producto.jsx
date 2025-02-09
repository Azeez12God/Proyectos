import React, { useContext, useState } from 'react'
import './Producto.css'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx';
import { useNavigate } from 'react-router-dom';
import ProductoInfo from '../producto/ProductoInfo.jsx';
import ProductoBotones from '../producto/ProductoBotones.jsx';
import ProductoListaBotones from '../producto/ProductoListaBotones.jsx';

const Producto = ({datos, agregarProducto}) => {
    const {id, nombre} = datos;
    const {borrarProducto, obtenerProducto} = useContext(contextoProductos);

    const navegar = useNavigate(null);

    const manejarClic = (evento) => {
        if (evento.target.classList.contains('producto-borrar')) {
            const mensaje = `¿Estás seguro de que quieres borrar ${nombre}?`;
            const borrar = confirm(mensaje);
            if (borrar) {
                borrarProducto(id);
            }
        }

        if (evento.target.classList.contains('producto-editar')) {
            obtenerProducto(id);
            navegar(`/editar_producto`);
        }
    };

    return (
        <div className='producto-contenedor' id={id} onClick={(e)=>{manejarClic(e)}}>
            <ProductoInfo datos={datos}/>
            {!agregarProducto ? <ProductoBotones/> : <ProductoListaBotones/>}
        </div>
    )
}

export default Producto