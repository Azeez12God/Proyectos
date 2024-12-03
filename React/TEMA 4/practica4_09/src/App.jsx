import { useState } from 'react'
import './App.css'
import Localizador from './componentes/Localizador.jsx';
import Colorines from './componentes/Colorines.jsx';
import Contador from './componentes/Contador.jsx';
import Cronometro from './componentes/Cronometro.jsx';

function App() {
  // Declaramos un estado que comprobará cuando se esté mostrando el componente Localizador.
  const [mostrar, setMostrar] = useState(true); 
  return (
    <>
      {/** Establecemos el evento al botón que desmonte el componente al clicarlo. */}
      <button
        onClick={()=>{
          setMostrar(!mostrar);
        }}
      >
        Montar/Desmontar componente
      </button>

      {/*mostrar && <Localizador/>*/}
      {/*mostrar && <Colorines/>*/}
      {/*mostrar && <Contador/>*/}
      {/*mostrar && <Cronometro/>*/}
    </>
  )
}

export default App
