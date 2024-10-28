import React from 'react'
import { Outlet } from 'react-router-dom'
import Submenu_Peliculas from '../menus/Submenu_Peliculas.jsx'

const Peliculas = () => {
  // Usamos Outlet para cargar el submenú correspondiente a películas.
  return (
    <>
        <h2>Este es el componente de películas.</h2>
        <div className='peliculas-navegacion'>
          <h3>Filtrar películas</h3>
          <Submenu_Peliculas/>
        </div>

        <div>
          <Outlet/>
        </div>
    </>
  )
}

export default Peliculas