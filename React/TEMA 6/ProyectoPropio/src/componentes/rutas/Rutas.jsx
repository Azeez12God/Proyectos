import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../paginas/Inicio.jsx'
import Login from '../paginas/Login.jsx'

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Rutas