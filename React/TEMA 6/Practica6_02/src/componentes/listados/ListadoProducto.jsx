import React from 'react'
import './ListadoProducto.css'

const ListadoProducto = ({datos}) => {
    const {id, nombre, precio, descripcion, peso} = datos;
    return (
        <>
            <div className='listadoProducto_producto' id={id}>
                <h3>{nombre} - {precio} €</h3>
                <h4>{peso} kg</h4>
                <p>{descripcion}</p>
            </div>
        </>
    )
}

export default ListadoProducto