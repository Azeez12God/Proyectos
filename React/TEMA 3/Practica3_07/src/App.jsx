import './App.css'
import Cabecera from './componentes/Cabecera.jsx'
import Contenedor from './componentes/Contenedor.jsx'
import Contenido from './componentes/Contenido.jsx'
import Menu from './componentes/menus/Menu.jsx'
import Pie from './componentes/Pie.jsx'

function App() {

  return (
    <>
      <Contenedor>
        <Cabecera/>
        <Menu/>
        <Contenido/>
        <Pie/>
      </Contenedor>
    </>
  )
}

export default App
