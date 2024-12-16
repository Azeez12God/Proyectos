import { useEffect, useState } from 'react';
import './App.css';
import { obtenerDatos } from './biblioteca/biblioteca.js'; // Función para obtener datos de la API.
import ListaPersonajes from './componentes/ListaPersonajes.jsx'; // Componente para la lista de personajes.
import InfoPersonaje from './componentes/InfoPersonaje.jsx'; // Componente para mostrar detalles de un personaje.

function App() {
  // Estados iniciales.
  const personajesIniciales = [];
  const errorInicial = "";
  const personajeSelecInicial = "";

  // Estados de la aplicación.
  const [personajes, setPersonajes] = useState(personajesIniciales);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(personajeSelecInicial);
  const [error, setError] = useState(errorInicial);

  const url = "https://api.api-onepiece.com/v2/characters/en";

  // Función para obtener los personajes de la API y manejar posibles errores.
  const traerPersonajes = async () => {
    try {
      const datos = await obtenerDatos(url);
      setPersonajes(datos);
    } catch (error) {
      setError(`Se ha producido un error: ${error.message}`);
  };

  // Función para manejar la selección de un personaje y actualizar el estado.
  const manejarPersonajeSeleccionado = (id) => {
    const filtrarPersonaje = personajes.filter((psj) => psj.id === parseInt(id));
    setPersonajeSeleccionado(filtrarPersonaje[0]);
  };

  // Efecto para cargar los personajes al iniciar la aplicación.
  useEffect(() => {
    traerPersonajes(); // Llama a la función para obtener datos al montar el componente.
  }, []);

  return (
    <>
      <div id="contenedor-contenedor">
        {/* Si hay un error, muestra el mensaje; si no, muestra la lista de personajes. */}
        {error
          ? <p>{error}</p>
          : <ListaPersonajes personajes={personajes} seleccionarPersonaje={manejarPersonajeSeleccionado} />
        }

        {/* Muestra la información del personaje seleccionado o un mensaje genérico. */}
        <div className="contenedor-informacion">
          <div className="informacion-nombre" id="informacion-nombre">
            {personajeSeleccionado
              ? <h3>{personajeSeleccionado.name}</h3>
              : <h3>No has seleccionado personaje.</h3>
            }
          </div>
          <div className="informacion-datos" id="informacion-datos">
            {personajeSeleccionado
              ? <InfoPersonaje personaje={personajeSeleccionado} />
              : <p>Clica en un personaje de la lista.</p>
            }
          </div>
        </div>
      </div>
    </>
  );
  }
}
export default App