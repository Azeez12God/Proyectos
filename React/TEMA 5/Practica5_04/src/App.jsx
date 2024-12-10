import { useState } from 'react'
import './App.css'
import PeliculaInformación from './componentes/PeliculaInformación.jsx';
import PeliculaLista from './componentes/PeliculaLista.jsx';
import { useEffect } from 'react';
import { obtenerDatos } from './biblioteca/biblioteca.js';

function App() {
  const peliculasIniciales = [];
  const peliculaSeleccionadaInicial = "";
  const errorInicial = "";
  const url = "https://swapi.dev/api/films"; 

  const [peliculas, setPeliculas] = useState(peliculasIniciales);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(peliculaSeleccionadaInicial);
  const [error, setError] = useState(errorInicial);

  const manejarPeliculaSeleccionada = (id) => {
    const filtrarPelicula = peliculas.filter((pelicula)=>{
      return pelicula.episode_id === parseInt(id);
    });
    setPeliculaSeleccionada(filtrarPelicula[0]);
  }

  const traerPeliculas = async() => {
    try{
      const datos = await obtenerDatos(url);
      setPeliculas(datos.results);
    }catch(error){
      setError(`Se ha producido un error en la película: ${error.message}`)
    }
  }

  useEffect(()=>{
      traerPeliculas();
  }, []);

  return (
      <>
        <div id="contenedor-contenedor">
          <PeliculaLista peliculas={peliculas} seleccionarPelicula={manejarPeliculaSeleccionada}/>
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

export default App
