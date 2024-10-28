import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navegar = useNavigate();
  return (
    <>
        <h2>Ha ocurrido un error, por favor, vuelva a Inicio.</h2>
        <button
            onClick={()=>{
                navegar("/")
            }}
        >
            Volver a inicio
        </button>
    </>
  )
}

export default Error