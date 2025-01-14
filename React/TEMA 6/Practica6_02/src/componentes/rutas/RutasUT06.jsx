import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio.jsx";
import Login from "../paginas/Login.jsx";
import Errores from "../paginas/Errores.jsx";

const RutasUT06 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Errores />} />
      </Routes>
    </>
  );
};

export default RutasUT06;
