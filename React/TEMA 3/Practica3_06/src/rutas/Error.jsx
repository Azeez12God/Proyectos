import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navegar = useNavigate();
  return (
    <>
        <h1>¡Ups! Se ha producido un error. Por favor vuelva a intentarlo.</h1>
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

export default Error