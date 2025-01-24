import React, { useContext } from 'react'
import ListadoProductos from '../listados/ListadoProductos.jsx'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx'
import './Listados.css'

const Listados = () => {
    const {filtrarProductosNombre, cargarProductos, filtrarProductosPrecio, filtrarProductosPeso, ordenarProductosNombre, ordenarProductosPrecio, ordenarProductosPeso} = useContext(contextoProductos);
    return (
        <>
            <div className='listadoProductos_botones'>
                <button onClick={()=>{
                    cargarProductos();
                }}>
                    Cargar productos
                </button>

                <div className='botones_filtrar'>
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

                <div className='botones_ordenar'>
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
            </div>
            <div id='listadoProductos_contenedor'>
                <div listadoProductos_productos>
                    <h2>Listado de productos</h2>
                    <ListadoProductos/>
                </div>
            </div>
        </>
    )
}

export default Listados