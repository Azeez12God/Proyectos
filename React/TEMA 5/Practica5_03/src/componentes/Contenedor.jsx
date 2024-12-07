import React, { useState } from 'react'
import PeliculaLista from './PeliculaLista.jsx'
import './Contenedor.css';
import PeliculaInformación from './PeliculaInformación.jsx';

const Contenedor = () => {
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

    const manejarPeliculaSeleccionada = (pelicula) => {
        setPeliculaSeleccionada(pelicula);
    }

    return (
        <>
            <div id="contenedor-contenedor">
                <PeliculaLista seleccionarPelicula={manejarPeliculaSeleccionada}/>
                <div className="contenedor-informacion">
                    <div className="informacion-titulo" id="informacion-titulo">
                        {peliculaSeleccionada
                        ? <h3>{peliculaSeleccionada.title}</h3>
                        : <h3>No has seleccionado película.</h3>
                        }
                    </div>
                    <div className="informacion-datos" id="informacion-datos">
                        {peliculaSeleccionada
                        ? <PeliculaInformación
                            sinopsis={peliculaSeleccionada.opening_crawl}
                            director={peliculaSeleccionada.director}
                            productor={peliculaSeleccionada.producer}
                            fechaLanzamiento={peliculaSeleccionada.release_date}
                        />
                        : <p>Clica en una película en la lista de películas.</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contenedor