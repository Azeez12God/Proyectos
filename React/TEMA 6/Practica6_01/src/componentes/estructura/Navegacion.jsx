import React from "react";
import { Link } from "react-router-dom";
import "./Navegacion.css";

const Navegacion = () => {
  // Es necesario comprobar si hay sesión iniciada para
  // dar acceso al menú.
  return (
    <>
      <nav className='navegacion__menu'>
        <Link className='navegacion__enlace' to='/'>
          Inicio
        </Link>
      </nav>
    </>
  );
};

export default Navegacion;
