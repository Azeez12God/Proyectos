import { useState } from 'react'
import './App.css'
import listaDiscentes from '../src/objetos/matriculados.json'
import Listado from './componentes/Listado.jsx'
import Matricula from './componentes/Matricula.jsx'

function App() {
  return (
    <>
      <h2>Listado de números:</h2>
      <Listado/>
      <br />
      <h2>Matrícula de alumnos:</h2>
      <Matricula listaDiscentes={listaDiscentes}/>
    </>
  )
}

export default App
