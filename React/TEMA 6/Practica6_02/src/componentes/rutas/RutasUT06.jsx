import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio.jsx";
import Login from "../paginas/Login.jsx";
import Errores from "../paginas/Errores.jsx";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";

const RutasUT06 = () => {
  const {sesionIniciada} = useContext(contextoSesion)
  return (
    <>
      <Routes>
        <Route path='/' element={sesionIniciada ? <Inicio /> : <Login/>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Errores />} />
      </Routes>
    </>
  );
};

export default RutasUT06;
