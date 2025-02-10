import React, { useState } from 'react'
import ListaProductos from '../productos/ListaProductos.jsx'
import './AgregarProductos.css'
import ListaProductosLista from '../listas_productos/ListaProductosLista.jsx';
import useProveedorProductos from '../hooks/useProveedorProductos.js';
import useProveedorCompra from '../hooks/useProveedorCompra.js';
import useProveedorListas from '../hooks/useProveedorListas.js';

const AgregarProductos = () => {
    const {obtenerProducto, producto} = useProveedorProductos();
    const {insertarProductoLista, quitarProductoLista, confirmarCambios} = useProveedorCompra();
    const {lista} = useProveedorListas();

    const [gestionarProductos, setGestionarProductos] = useState(false);

    const manejarClic = (evento) => {
        if(evento.target.classList.contains('producto-agregar-lista')){
            obtenerProducto(evento.target.closest('.producto-contenedor').id);
            producto.nombre && insertarProductoLista(producto);
            setGestionarProductos(true);
        }

        if(evento.target.classList.contains('producto-quitar-lista')){
            obtenerProducto(evento.target.closest('.producto-contenedor').id);
            quitarProductoLista(producto);
            setGestionarProductos(true);
        }

        if(evento.target.classList.contains('agregar-productos-confirmar')){
            confirmarCambios(lista.id);
        }
    };

    return (
        <>
            <div className='agregar-productos-contenedor' onClick={(e)=>{manejarClic(e)}}>
                <div className='agregar-productos-lista-productos'>
                    <ListaProductos agregarProducto={true}/>
                </div>
                <div className='agregar-productos-lista-lista'>
                    <ListaProductosLista agregando={true} agregarProducto={true}/>
                </div>

                <button disabled={!gestionarProductos} className='agregar-productos-confirmar'>Confirmar</button>
            </div>
        </>
    )
}

export default AgregarProductos