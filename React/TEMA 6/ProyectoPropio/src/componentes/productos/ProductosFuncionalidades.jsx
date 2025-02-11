import React from 'react'
import './ProductosFuncionalidades.css'
import { Link } from 'react-router-dom';
import useProveedorProductos from '../hooks/useProveedorProductos';

const ProductosFuncionalidades = () => {
    const {cargarProductos, filtrarProductosNombre, filtrarProductosPrecio, filtrarProductosPeso, 
        ordenarProductosNombre, ordenarProductosPeso, ordenarProductosPrecio
    } = useProveedorProductos();

    return (
        <>
            <div className='botones-navegacion'>
                <Link to='/insertar_producto'>Insertar</Link>
            </div>
            <button onClick={()=>{
                cargarProductos();
            }}>
                Cargar productos
            </button>

            <div className='botones-filtrar'>
                <input type="text" placeholder='Filtrar por nombre' onChange={(e)=>{
                    filtrarProductosNombre(e.target.value);
                }}/>

                <input type='number' placeholder='Filtrar por precio' onChange={(e)=>{
                    filtrarProductosPrecio(e.target.value);
                }}/>

                <input type='number' placeholder='Filtrar por peso' onChange={(e)=>{
                    filtrarProductosPeso(e.target.value);
                }}/>
            </div>

            <div className='botones-ordenar'>
                <button onClick={()=>{
                    ordenarProductosNombre();
                }}>
                    Ordenar productos por nombre
                </button>

                <button onClick={()=>{
                    ordenarProductosPrecio();
                }}>
                    Ordenar productos por precio
                </button>
                <button onClick={()=>{
                    ordenarProductosPeso();
                }}>
                    Ordenar productos por peso
                </button>
            </div>
        </>
    )
}

export default ProductosFuncionalidades