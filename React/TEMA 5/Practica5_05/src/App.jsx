import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const personajesIniciales = [];
  const errorInicial = "";

  const [personajes, setPersonajes] = useState(personajesIniciales);
  const [error, setError] = useState(errorInicial);

  const traerPersonajes = async() => {
    try{
      const datos = await obtenerDatos(url);
      setPersonajes(datos);
    }catch(error){
      setError(`Se ha producido un error en la película: ${error.message}`);
    }
  };

  useEffect(()=>{
    traerPersonajes();
  }, [])

  return (
    <>
      <div id="contenedor-contenedor">
        <div className="contenedor-informacion">
          <div className="informacion-titulo" id="informacion-titulo">

          </div>
          <div className="informacion-datos" id="informacion-datos">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
