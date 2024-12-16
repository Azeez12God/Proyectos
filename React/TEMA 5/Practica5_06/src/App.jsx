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
  const url = "https://swapi.py4e.com/api/films"; 

  // Declaramos los estados del componente.
  const [peliculas, setPeliculas] = useState(peliculasIniciales);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(peliculaSeleccionadaInicial);
  const [error, setError] = useState(errorInicial);

  // Función que maneja la película que está siendo seleccionada al clicar un li.
  const manejarPeliculaSeleccionada = (id) => {
    const filtrarPelicula = peliculas.filter((pelicula)=>{
      return pelicula.episode_id === parseInt(id); // El id es un número.
    });
    setPeliculaSeleccionada(filtrarPelicula[0]);
  }

  // Función que trae las peliculas de la API con await y las guarda en el estado.
  const traerPeliculas = async() => {
    try{
      const datos = await obtenerDatos(url);
      setPeliculas(datos.results);
    }catch(error){
      setError(`Se ha producido un error en la película: ${error.message}`)
    }
  }

  // Traemos las películas al principio del componente.
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
              ? <>
                  <PeliculaInformación pelicula={peliculaSeleccionada}/>
                </>
              : <p>Clica en una película en la lista de películas.</p>
              }
            </div>
          </div>
        </div>
      </>
  )
}

export default App
