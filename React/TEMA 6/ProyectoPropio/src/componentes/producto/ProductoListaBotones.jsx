import React from 'react'

const ProductoListaBotones = () => {
    return (
        <>
            <div className='producto-botones'>
                <img className='producto-agregar-lista' alt='Agregar producto' src='https://cdn-icons-png.flaticon.com/512/7046/7046041.png'/>
                <img id='producto-quitar-lista' className='producto-quitar-lista' alt='Bajar cantidad producto' src='https://cdn-icons-png.flaticon.com/512/25/25232.png'/>
            </div>
        </>
    )
}

export default ProductoListaBotones