import React, { useContext, useState } from 'react'
import './Producto.css'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx';
import { useNavigate } from 'react-router-dom';
import useProveedorListas from '../hooks/useProveedorListas.js';
import useProveedorCompra from '../hooks/useProveedorCompra.js'

const Producto = ({datos, esListaCompra, cantidad}) => {
    const {id, nombre, precio, descripcion, peso, imagen} = datos;
    const {borrarProducto, obtenerProducto} = useContext(contextoProductos);
    const {lista} = useProveedorListas();
    const {gestionarCantidad, borrarProductoLista} = useProveedorCompra();
    const [cantidadActual, setCantidadActual] = useState(cantidad);

    const navegar = useNavigate(null);

    const manejarClick = (evento) => {
        if (evento.target.classList.contains('producto-borrar')) {
            const mensaje = esListaCompra
                ? `¿Estás seguro de que quieres eliminar ${nombre} de la lista de la compra?`
                : `¿Estás seguro de que quieres borrar ${nombre}?`;
            const borrar = confirm(mensaje);
            if (borrar) {
                !esListaCompra ? borrarProducto(id) : borrarProductoLista(id, lista.id);
            }
        }

        if (!esListaCompra && evento.target.classList.contains('producto-editar')) {
            obtenerProducto(id);
            navegar(`/editar_producto`);
        }

        if(esListaCompra && evento.target.classList.contains('producto-agregar')){
            gestionarCantidad(true, id, lista.id);
            setCantidadActual(cantidadActual + 1);
        }

        if(esListaCompra && evento.target.id === 'producto-quitar'){
            gestionarCantidad(false, id, lista.id);
            cantidadActual > 0 && setCantidadActual(cantidadActual - 1);
        }
    };

    return (
        <div className='producto-contenedor' id={id} onClick={(e)=>{manejarClick(e)}}>
            <img src={imagen} alt={imagen} className='producto-imagen'/>
            <h3 className='produco-nombre'>{nombre}</h3>
            <p className='producto-precio'>{precio} €</p>
            <p className='producto-peso'>{peso} kg</p>
            <p className='producto-descripcion'>{descripcion}</p>
            {esListaCompra && (
            <p className='producto-cantidad'>Cantidad: {cantidadActual > 0 ? cantidadActual : 0}</p>
            )}
            <div className='producto-botones'>
                {!esListaCompra ? <img className='producto-editar' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' alt='Editar producto'/> : 
                    <>
                        <img className='producto-agregar' alt='Agregar producto' src='https://cdn-icons-png.flaticon.com/512/7046/7046041.png'/>
                        <img id='producto-quitar' alt='Bajar cantidad producto' src='https://cdn-icons-png.flaticon.com/512/25/25232.png'/>
                    </>
                }
                <img className='producto-borrar' src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' alt='Borrar producto'/>
            </div>
        </div>
    )
}

export default Producto