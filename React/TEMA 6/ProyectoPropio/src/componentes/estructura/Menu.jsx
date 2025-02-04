import React, { useContext } from 'react'
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx'
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    const {sesionIniciada} = useContext(contextoSesion);
    return (
        <>
            <nav id='menu'>
                <Link to='/' className='navegacion-enlace'>Inicio</Link>
                {sesionIniciada && <>
                    <Link to='/productos' className='navegacion-enlace'>Productos</Link>
                    <Link to='/listas' className='navegacion-enlace'>Listas de la compra</Link>
                </>}
            </nav>
        </>
    )
}

export default Menu