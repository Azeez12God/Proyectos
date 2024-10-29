import React from 'react'
import Submenu_Galeria from '../menus/Submenu_Galeria.jsx'
import { Outlet } from 'react-router-dom'


const Galeria = () => {
  return (
    <>
        <h2>Este es el componente de galería.</h2>
        <div className='galeria-navegacion'>
          <h3>Filtrar imágenes</h3>
          <Submenu_Galeria/>
        </div>

        <div>
          <Outlet/>
        </div>
    </>
  )
}

export default Galeria