import React from 'react'
import {Link} from "react-router-dom"
import "./Menu.css"

const Menu = () => {
  return (
    <>
        <div className='menu-contenedor'>
            <Link className='menu-elemento' to='/'>
                Inicio
            </Link>
            <Link className='menu-elemento' to='/peliculas'>
                Películas
            </Link>
            <Link className='menu-elemento' to='/interpretes'>
                Intérpretes
            </Link>
            <Link className='menu-elemento' to='/galeria'>
                Galería
            </Link>
            <Link className='menu-elemento' to='/acerca-de'>
                Acerca de
            </Link>
        </div>    
    </>
  )
}

export default Menu