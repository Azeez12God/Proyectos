import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio.jsx";
import Login from "../paginas/Login.jsx";
import Error from "../paginas/Error.jsx";

const RutasUT06 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </>
  );
};

export default RutasUT06;
