import React from 'react'
import FormularioProductos from './FormularioProductos'

const EditarProducto = () => {
    return (
        <>
            <h2>Editar un producto</h2>
            <FormularioProductos editar={true}/>
        </>
    )
}

export default EditarProducto