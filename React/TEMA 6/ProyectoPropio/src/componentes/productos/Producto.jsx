import React, { useContext } from 'react'
import './Producto.css'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx';
import FormularioProductos from '../admin_productos/FormularioProductos.jsx';
import { useNavigate } from 'react-router-dom';

const Producto = ({datos}) => {
    const {id, nombre, precio, descripcion, peso, imagen} = datos;
    const {borrarProducto, obtenerProducto} = useContext(contextoProductos);
    const navegar = useNavigate(null);

    const manejarClick = (evento) => {
        if(evento.target.classList.contains('producto-borrar')){
            const borrar = confirm(`¿Estás seguro de que quieres borrar ${nombre}?`);
            if(borrar){
                borrarProducto(id);
            }
        }

        if(evento.target.classList.contains('producto-editar')){
            obtenerProducto(id);
            console.log(id);
            navegar(`/editar_producto`);
        }
    }

    return (
        <div className='producto-contenedor' id={id} onClick={(e)=>{manejarClick(e)}}>
            <img src={imagen} alt={imagen} className='producto-imagen'/>
            <h3 className='produco-nombre'>{nombre}</h3>
            <p className='producto-precio'>{precio} €</p>
            <p className='producto-peso'>{peso} kg</p>
            <p className='producto-descripcion'>{descripcion}</p>
            <div className='producto-botones'>
                <img className='producto-editar' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' alt='Editar producto'/>
                <img className='producto-borrar' src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' alt='Borrar producto'/>
            </div>
        </div>
    )
}

export default Producto