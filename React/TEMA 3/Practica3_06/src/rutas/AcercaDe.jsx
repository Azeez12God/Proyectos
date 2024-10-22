import React from 'react'
import { useNavigate } from 'react-router-dom'

const AcercaDe = () => {
  const navegar = useNavigate();
  return (
    <>
        <h2>Este es la información de los desarrolladores.</h2>
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

export default AcercaDe