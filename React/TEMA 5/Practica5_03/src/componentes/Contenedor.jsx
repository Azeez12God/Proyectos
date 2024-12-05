import React from 'react'
import PeliculaLista from './PeliculaLista.jsx'
import './Contenedor.css';

const Contenedor = () => {
  return (
    <>
        <div id="contenedor-contenedor">
            <PeliculaLista/>
            <div className="contenedor-informacion">
                <div className="informacion-titulo" id="informacion-titulo">
                    <h2>No has seleccionado película.</h2>
                </div>
                <div className="informacion-datos" id="informacion-datos">
                    <p>Clica en una película en la lista de películas.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contenedor