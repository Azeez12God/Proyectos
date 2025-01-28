import './App.css'
import Cabecera from './componentes/estructura/Cabecera.jsx'
import Menu from './componentes/estructura/Menu.jsx'
import Pie from './componentes/estructura/Pie.jsx'
import Rutas from './componentes/rutas/Rutas.jsx'
import ProveedorSesion from './contextos/ProveedorSesion.jsx'

function App() {

  return (
    <>
      <div className='contenedor-contenedor'>
        <ProveedorSesion>
          <Cabecera/>
          <Menu/>
          <Rutas/>
          <Pie/>
        </ProveedorSesion>
      </div>
    </>
  )
}

export default App
