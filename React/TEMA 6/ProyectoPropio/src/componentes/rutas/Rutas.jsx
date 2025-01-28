import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../paginas/Inicio.jsx'
import Login from '../paginas/Login.jsx'
import Error from '../paginas/Error.jsx'

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </>
    )
}

export default Rutas