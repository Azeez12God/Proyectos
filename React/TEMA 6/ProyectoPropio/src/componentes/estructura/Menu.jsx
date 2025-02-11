import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'
import useProveedorSesion from '../hooks/useProveedorSesion';

const Menu = () => {
    const {sesionIniciada} = useProveedorSesion();
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