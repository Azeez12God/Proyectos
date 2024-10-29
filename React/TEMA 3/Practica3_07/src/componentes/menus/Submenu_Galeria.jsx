"use strict"

import React from 'react'
import {Link} from 'react-router-dom'
import './Submenu_Galeria.css'

const Submenu_Galeria = () => {
  return (
    <>
        <Link
            className='elementomenu'
            to='/galeria/titulo'
        >
            Título
        </Link>
        <Link
            className='elementomenu'
            to='/galeria/interprete'
        >
            Intérprete
        </Link>
        <Link
            className='elementomenu'
            to='/galeria/director'
        >
            Director
        </Link>
    </>
  )
}

export default Submenu_Galeria