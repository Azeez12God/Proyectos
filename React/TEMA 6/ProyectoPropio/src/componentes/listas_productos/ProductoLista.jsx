import React, { useState } from 'react'
import useProveedorCompra from '../hooks/useProveedorCompra.js';
import useProveedorListas from '../hooks/useProveedorListas.js';
import ProductoInfo from '../producto/ProductoInfo.jsx';
import ProductoBotones from '../producto/ProductoBotones.jsx';

const ProductoLista = ({datos, agregarProducto}) => {
    const {cantidad} = datos;
    const {id, nombre} = datos.Productos;

    const {gestionarCantidad, borrarProductoLista} = useProveedorCompra();
    const {lista} = useProveedorListas();

    const [cantidadActual, setCantidadActual] = useState(cantidad);

    const manejarClic = (evento) => {
        if (evento.target.classList.contains('producto-borrar-lista')) {
            const mensaje = `¿Estás seguro de que quieres eliminar ${nombre} de la lista de la compra?`

            const borrar = confirm(mensaje);
            if (borrar) {
                borrarProductoLista(id, lista.id);
            }
        }

        if(evento.target.classList.contains('producto-agregar')){
            gestionarCantidad(true, id, lista.id);
            setCantidadActual(cantidadActual + 1);
        }

        if(evento.target.id === 'producto-quitar'){
            gestionarCantidad(false, id, lista.id);
            cantidadActual > 0 && setCantidadActual(cantidadActual - 1);
        }
    };

    return (
        <div className='producto-contenedor' id={id} onClick={(e)=>{manejarClic(e)}}>
            <ProductoInfo datos={datos.Productos}/>
            <p className='producto-cantidad'>Cantidad: {cantidadActual}</p>
            {!agregarProducto && <ProductoBotones esListaCompra={true}/>}
        </div>
    )
}

export default ProductoLista