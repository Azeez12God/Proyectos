import React from 'react'

const ProductoInfo = ({datos}) => {
    const {nombre, precio, descripcion, peso, imagen} = datos;
    return (
        <>
            <img src={imagen} alt={imagen} className='producto-imagen'/>
            <h3 className='produco-nombre'>{nombre}</h3>
            <p className='producto-precio'>{precio} €</p>
            <p className='producto-peso'>{peso} kg</p>
            <p className='producto-descripcion'>{descripcion}</p>
        </>
    )
}

export default ProductoInfo