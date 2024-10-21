import './App.css'
import {Routes, Route} from 'react-router-dom';
import Inicio from './rutas/Inicio.jsx';
import Contacto from './rutas/Contacto.jsx';
import AcercaDe from './rutas/AcercaDe.jsx';
import Productos from './rutas/Productos.jsx';
import Menu from './rutas/Menu.jsx';

function App() {


  return (
    <>
    <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/acerca-de' element={<AcercaDe/>}/>
        <Route path='/productos' element={<Productos/>}/>
      </Routes>
    </>
  )
}

export default App
