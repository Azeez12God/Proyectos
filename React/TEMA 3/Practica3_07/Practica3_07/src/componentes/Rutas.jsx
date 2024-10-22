import React from 'react'
import {Routes, Route} from "react-router-dom"
import Inicio from './Inicio.jsx';
import Peliculas from './Peliculas.jsx';
import Interpretes from './Interpretes.jsx';
import Galeria from './Galeria.jsx';
import AcercaDe from './AcercaDe.jsx';

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/peliculas' element={<Peliculas/>}/>
            <Route path='/interpretes' element={<Interpretes/>}/>
            <Route path='/galeria' element={<Galeria/>}/>
            <Route path='/acerca-de' element={<AcercaDe/>}/>
        </Routes>
    </>
  )
}

export default Rutas