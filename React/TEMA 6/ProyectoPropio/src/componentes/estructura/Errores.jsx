import React from "react";
import "./Errores.css";

const Errores = ({ children }) => {
  return (
    <>
      <div className='errores_error'>{children}</div>
    </>
  );
};

export default Errores;