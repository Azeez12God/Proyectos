import './App.css'
import Cabecera from './componentes/estructura/Cabecera.jsx'
import Rutas from './componentes/rutas/Rutas.jsx'
import ProveedorSesion from './contextos/ProveedorSesion.jsx'

function App() {

  return (
    <>
      <div className='contenedor-contenedor'>
        <ProveedorSesion>
          <Cabecera/>
          <Rutas/>
        </ProveedorSesion>
      </div>
    </>
  )
}

export default App
