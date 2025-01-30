import React from 'react'
import './Producto.css'

const Producto = ({datos}) => {
    const {id, nombre, precio, descripcion, peso, imagen} = datos;

    return (
        <div className='producto-contenedor' id={id}>
            <img src={imagen} alt={imagen} className='producto-imagen'/>
            <h3 className='produco-nombre'>{nombre}</h3>
            <p className='producto-precio'>{precio} €</p>
            <p className='producto-peso'>{peso} kg</p>
            <p className='producto-descripcion'>{descripcion}</p>
        </div>
    )
}

export default Producto