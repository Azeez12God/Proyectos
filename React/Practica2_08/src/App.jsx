import './App.css'
import Pelicula from './componentes/Pelicula.jsx';
import pelicula from "./objetos/pelicula.json";

function App() {

  return (
    <>
      <Pelicula 
        nombre={pelicula.nombre}
        director={pelicula.director}
        cartelera={pelicula.cartelera}
        actores={pelicula.actores}
      >
        {pelicula.resumen}
      </Pelicula>
    </>
  )
}

export default App
