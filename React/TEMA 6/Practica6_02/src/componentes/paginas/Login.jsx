import React, { useContext } from "react";
import "./Login.css";
import CrearCuenta from "../sesion/CrearCuenta.jsx";
import IniciarSesion from "../sesion/IniciarSesion.jsx";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";
import Errores from "./Errores.jsx";

const Login = () => {
  const {errorUsuario} = useContext(contextoSesion);
  return (
    <>
      <div className='inicioSesion'>
        <CrearCuenta/>
        <IniciarSesion/>
      </div>
      <Errores>{errorUsuario && errorUsuario}</Errores>
    </>
  );
};

export default Login;
