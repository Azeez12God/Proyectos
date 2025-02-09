import React from 'react'
import ListadoListas from '../listas/ListadoListas.jsx'
import './Listas.css'
import ListasFuncionalidades from '../listas/ListasFuncionalidades.jsx'

const Listas = () => {
    return (
        <>
            <div className='listas-funcionalidades'>
                <ListasFuncionalidades/>
            </div>
            
            <div className='listas-listado'>
                <ListadoListas/>
            </div>
        </>
    )
}

export default Listas