import React, { useContext } from 'react'
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';
import './IniciarSesion.css'

const IniciarSesion = () => {
    const {actualizarDato, iniciarSesion, recordarPassword} = useContext(contextoSesion);
    return (
        <>
            <div className='cuentaUsuario'>
                <h2>Inicia sesión</h2>
                <label htmlFor='email'>Correo electrónico</label>
                <input
                type='email'
                name='email'
                id='email'
                placeholder='Su correo electrónico.'
                onChange={(e) => {
                    actualizarDato(e);
                }}
                />
                <label htmlFor='password'>Contraseña</label>

                <input
                type='password'
                name='password'
                id='password'
                placeholder='Su contraseña.'
                onChange={(e) => {
                    actualizarDato(e);
                }}
                />
                <button
                className='botonSesion'
                onClick={(e) => {
                    iniciarSesion();
                }}
                >
                Iniciar sesión
                </button>
                <p className='recordarPassword'
                    onClick={()=>{
                        recordarPassword();
                    }}
                >
                    No recuerdo la contraseña.
                </p>
            </div>
        </>
    )
}

export default IniciarSesion