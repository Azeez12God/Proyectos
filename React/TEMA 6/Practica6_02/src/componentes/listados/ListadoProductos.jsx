import React, { useContext } from 'react'
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx'
import ListadoProducto from './ListadoProducto.jsx';
import './ListadoProductos.css'

const ListadoProductos = () => {
    const {listadoProductos, obtenerProductos} = useContext(contextoProductos);

    return (
        <>
            <div id='listadoProductos_contenedor'>
                <div listadoProductos_productos>
                    {listadoProductos.length>0 && Array.isArray(listadoProductos) ?
                        listadoProductos.map((producto)=>{
                            return <ListadoProducto key={producto.id} datos={producto}/>
                        })
                        : "No hay productos"
                    }
                </div>

                <div className='listadoProductos_botones'>
                    <button onClick={()=>{
                        obtenerProductos();
                    }}>
                        Cargar productos
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListadoProductos