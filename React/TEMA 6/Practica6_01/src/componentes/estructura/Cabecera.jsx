import React from "react";
import { Link } from "react-router-dom";
import "./Cabecera.css";

const Cabecera = () => {
  return (
    <>
      <header id='cabecera'>
        <h1>Crea tus listas de la compra</h1>
        <div className='cabecera__sesion'></div>
        <nav className='navegacion__menu'>
          <Link className='navegacion__enlace' to='/login'>
            Login
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Cabecera;
