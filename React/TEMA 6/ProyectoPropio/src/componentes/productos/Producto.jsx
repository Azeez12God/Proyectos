import React, { useContext } from 'react'
import './Producto.css'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx';
import { useNavigate } from 'react-router-dom';

const Producto = ({datos, esListaCompra, manejarBorrado, cantidad}) => {
    const {id, nombre, precio, descripcion, peso, imagen} = datos;
    const {borrarProducto, obtenerProducto} = useContext(contextoProductos);
    const navegar = useNavigate(null);

    const manejarClick = (evento) => {
        if (evento.target.classList.contains('producto-borrar')) {
            const mensaje = esListaCompra
                ? `¿Estás seguro de que quieres eliminar ${nombre} de la lista de la compra?`
                : `¿Estás seguro de que quieres borrar ${nombre}?`;
            const borrar = confirm(mensaje);
            if (borrar) {
                esListaCompra ? manejarBorrado(id) : borrarProducto(id);
            }
        }

        if (!esListaCompra && evento.target.classList.contains('producto-editar')) {
            obtenerProducto(id);
            navegar(`/editar_producto`);
        }
    };

    return (
        <div className='producto-contenedor' id={id} onClick={(e)=>{manejarClick(e)}}>
            <img src={imagen} alt={imagen} className='producto-imagen'/>
            <h3 className='produco-nombre'>{nombre}</h3>
            <p className='producto-precio'>{precio} €</p>
            <p className='producto-peso'>{peso} kg</p>
            <p className='producto-descripcion'>{descripcion}</p>
            <div className='producto-botones'>
                {!esListaCompra ? <img className='producto-editar' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' alt='Editar producto'/> : <p>{cantidad}</p>}
                <img className='producto-borrar' src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' alt='Borrar producto'/>
            </div>
        </div>
    )
}

export default Producto