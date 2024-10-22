import React from 'react'
import { useNavigate } from 'react-router-dom'

const Productos = () => {
  const navegar = useNavigate();
  return (
    <>
        <h2>Este es el componente de productos.</h2>
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

export default Productos