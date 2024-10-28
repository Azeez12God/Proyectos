import React from 'react'
import Cabecera from './Cabecera.jsx'
import Menu from './menus/Menu.jsx'
import Contenido from './Contenido.jsx'
import Pie from './Pie.jsx'
import './Contenedor.css'

const Contenedor = () => {
  return (
    <>
        <div className='contenedor-contenedor'>
            <Cabecera/>
            <Menu/>
            <Contenido/>
            <Pie/>
        </div>
    </>
  )
}

export default Contenedor