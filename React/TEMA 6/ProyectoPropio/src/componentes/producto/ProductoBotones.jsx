import React from 'react'

const ProductoBotones = ({esListaCompra}) => {
    return (
        <div className='producto-botones'>
           {esListaCompra ? 
            <>
                <img className='producto-agregar' alt='Agregar producto' src='https://cdn-icons-png.flaticon.com/512/7046/7046041.png'/>
                <img id='producto-quitar' alt='Bajar cantidad producto' src='https://cdn-icons-png.flaticon.com/512/25/25232.png'/>
                <img className='producto-borrar-lista' alt='Borrar producto de la lista' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'/>
            </>
           :
            <>
                <img className='producto-editar' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' alt='Editar producto'/> 
                <img className='producto-borrar' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt='Borrar producto'/>
            </>
            } 
        </div>
    )
}

export default ProductoBotones