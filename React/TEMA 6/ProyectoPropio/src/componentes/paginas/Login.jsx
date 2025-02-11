import React, { useContext } from 'react';
import IniciarSesion from '../sesion/IniciarSesion.jsx';
import CrearCuenta from '../sesion/CrearCuenta.jsx';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';
import Errores from '../estructura/Errores.jsx';
import './Login.css';

const Login = () => {
    const { errorUsuario } = useContext(contextoSesion);

    return (
        <>
            <div className="inicioSesion">
                <h2>Se podrá iniciar sesión o crear cuenta.</h2>
            </div>
            <div className="login-container">
                <CrearCuenta />
                <IniciarSesion />
            </div>
            {errorUsuario && <Errores>{errorUsuario}</Errores>}
        </>
    );
};

export default Login;