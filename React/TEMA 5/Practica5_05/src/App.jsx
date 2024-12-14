import { useEffect, useState } from 'react'
import './App.css'
import { obtenerDatos } from './biblioteca/biblioteca.js';
import ListaPersonajes from './componentes/ListaPersonajes.jsx';
import InfoPersonaje from './componentes/InfoPersonaje.jsx';

function App() {
  const personajesIniciales = [];
  const errorInicial = "";
  const personajeSelecInicial = "";

  const [personajes, setPersonajes] = useState(personajesIniciales);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(personajeSelecInicial);
  const [error, setError] = useState(errorInicial);
  const url = "https://api.api-onepiece.com/v2/characters/en";

  const traerPersonajes = async() => {
    try{
      const datos = await obtenerDatos(url);
      setPersonajes(datos);
    }catch(error){
      setError(`Se ha producido un error en la película: ${error.message}`);
    }
  };

  const manejarPersonajeSeleccionado = (id) => {
    const filtrarPersonaje = personajes.filter((psj)=>{
      return psj.id === parseInt(id);
    });
    setPersonajeSeleccionado(filtrarPersonaje[0]);
  }

  useEffect(()=>{
    traerPersonajes();
  }, [])

  return (
    <>
      <div id="contenedor-contenedor">
        <ListaPersonajes personajes={personajes} seleccionarPersonaje={manejarPersonajeSeleccionado}/>
        <div className="contenedor-informacion">
          <div className="informacion-nombre" id="informacion-nombre">
            {personajeSeleccionado
            ? <h3>{personajeSeleccionado.name}</h3>
            : <h3>No has seleccionado personaje.</h3>
            }
          </div>
          <div className="informacion-datos" id="informacion-datos">
            {personajeSeleccionado
            ? <InfoPersonaje personaje={personajeSeleccionado}/>
            : <p>Clica en un personaje de la lista.</p>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
