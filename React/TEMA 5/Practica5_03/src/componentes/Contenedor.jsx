import React from 'react'

const Contenedor = () => {
  return (
    <>
        <div id="contenedor-contenedor">
            <div class="contenedor-peliculas">
                <h2>Películas Star Wars</h2>
                <ul class="peliculas-lista" id="peliculas-lista">

                </ul>
            </div>

            <div class="contenedor-informacion">
                <div class="informacion-titulo" id="informacion-titulo">
                    <h2>No has seleccionado película.</h2>
                </div>
                <div class="informacion-datos" id="informacion-datos">
                    <p>Clica en una película en la lista de películas.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contenedor