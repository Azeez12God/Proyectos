import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contacto = () => {
  const navegar = useNavigate();
  return (
    <>
        <h2>Si desea más información puede contactarnos a través del siguiente
        correo electrónico:</h2>
        <h3>ponerenellistadodecosasquenomeimportan@feos.es</h3>
        <button
          onClick={()=>{
            navegar("/");
          }}
        >
          Inicio
        </button>
    </>
  )
}

export default Contacto