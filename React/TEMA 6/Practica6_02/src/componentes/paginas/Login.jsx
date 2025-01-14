import React from "react";
import "./Login.css";
import CrearCuenta from "../sesion/CrearCuenta.jsx";

const Login = () => {
  return (
    <>
      <div className='inicioSesion'>
        <CrearCuenta/>
      </div>
    </>
  );
};

export default Login;
