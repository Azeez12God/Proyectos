import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cabecera.css";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";
import CerrarSesion from "../sesion/CerrarSesion.jsx";

const Cabecera = () => {
  const {sesionIniciada, usuario} = useContext(contextoSesion);
  return (
    <>
      <header id='cabecera'>
        <h1>Crea tus listas de la compra</h1>
        <div className='cabecera__sesion'></div>
        <nav className='navegacion__menu'>
          {sesionIniciada && 
          <>
            <p>¡Hola {usuario.email}!</p>
            <CerrarSesion/>
          </>
          }
        </nav>
      </header>
    </>
  );
};

export default Cabecera;
