import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav id='menu'>
                <Link className='navegacion__enlace' to='/'>
                    Inicio
                </Link>
                <Link className='navegacion__enlace'>Bla</Link>
            </nav>
        </>
    )
}

export default Menu