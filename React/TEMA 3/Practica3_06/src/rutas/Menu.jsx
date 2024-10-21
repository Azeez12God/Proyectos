import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
        <nav>
            <Link to='/'>
                Inicio
            </Link>
            <Link to='/contacto'>
                Contacto
            </Link>
            <Link to='/acerca-de'>
                Acerca de
            </Link>
            <Link to='/productos'>
                Productos
            </Link>
        </nav>
    </>
  )
}

export default Menu