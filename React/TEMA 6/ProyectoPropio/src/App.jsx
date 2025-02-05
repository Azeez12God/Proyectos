import './App.css'
import Cabecera from './componentes/estructura/Cabecera.jsx'
import Menu from './componentes/estructura/Menu.jsx'
import Pie from './componentes/estructura/Pie.jsx'
import Rutas from './componentes/rutas/Rutas.jsx'
import ProveedorListas from './contextos/ProveedorListas.jsx'
import ProveedorProductos from './contextos/ProveedorProductos.jsx'
import ProveedorSesion from './contextos/ProveedorSesion.jsx'

function App() {

  return (
    <>
      <div className='contenedor-contenedor'>
        <ProveedorSesion>
          <Cabecera/>
          <Menu/>
          <ProveedorProductos>
            <ProveedorListas>
              <Rutas/>
            </ProveedorListas>
          </ProveedorProductos>
          <Pie/>
        </ProveedorSesion>
      </div>
    </>
  )
}

export default App
