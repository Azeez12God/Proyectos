import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../paginas/Inicio.jsx'
import Login from '../paginas/Login.jsx'
import Error from '../paginas/Error.jsx'
import Productos from '../paginas/Productos.jsx'
import InsertarProducto from '../admin_productos/InsertarProducto.jsx'
import EditarProducto from '../admin_productos/EditarProducto.jsx'
import Listas from '../paginas/Listas.jsx'
import ListaDetalle from '../paginas/ListaDetalle.jsx'
import AgregarProductos from '../paginas/AgregarProductos.jsx'
import InsertarLista from '../admin_listas/InsertarLista.jsx'

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/login' element={<Login />} />
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/insertar_producto' element={<InsertarProducto/>}/>
                <Route path='/editar_producto' element={<EditarProducto/>}/>
                <Route path='/listas' element={<Listas/>}/>
                <Route path='/listas/:id' element={<ListaDetalle/>}/>
                <Route path='/listas/agregarProductos' element={<AgregarProductos/>}/>
                <Route path='/insertar_lista' element={<InsertarLista/>}/>
                <Route path='*' element={<Error/>} />
            </Routes>
        </>
    )
}

export default Rutas