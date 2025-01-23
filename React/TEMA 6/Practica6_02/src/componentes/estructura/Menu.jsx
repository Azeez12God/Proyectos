import React, { useContext } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx'

const Menu = () => {
    const {sesionIniciada} = useContext(contextoSesion);
    return (
        <>
            <nav id='menu'>
                <Link className='navegacion__enlace' to='/'>
                    Inicio
                </Link>

                {sesionIniciada &&
                    <Link className='navegacion__enlace' to='/productos'>
                        Productos
                    </Link>
                }

                {!sesionIniciada && 
                    <Link className='navegacion__enlace' to='/login'>
                        Login
                    </Link>
                }
            </nav>
        </>
    )
}

export default Menu