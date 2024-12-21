import { useContext } from 'react';
import './App.css'
import PeliculaInformación from './componentes/PeliculaInformación.jsx';
import PeliculaLista from './componentes/PeliculaLista.jsx';
import { contextoPeliculas } from './contextos/ProveedorPeliculas.jsx';

function App() {
  const {error, peliculaSeleccionada, cargando} = useContext(contextoPeliculas);

  return (
      <>
        <div id="contenedor-contenedor">
          {cargando ?
          <p>Cargando...</p>
          : !error ?
          <PeliculaLista/>
          : <p>Ha ocurrido un error: {error}</p>
          }
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
                  <PeliculaInformación />
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
