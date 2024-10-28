import React from 'react'
import {Link} from "react-router-dom"
import "./Submenu_Peliculas.css"

const Submenu_Peliculas = () => {
  return (
    <>
        <Link
            className='elementomenu'
            to='/peliculas/titulo'
        >
            Título
        </Link>
        <Link
            className='elementomenu'
            to='/peliculas/interprete'
        >
            Intérprete
        </Link>
        <Link
            className='elementomenu'
            to='/peliculas/director'
        >
            Director
        </Link>
    </>
  )
}

export default Submenu_Peliculas