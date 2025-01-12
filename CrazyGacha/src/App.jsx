import { useState } from 'react'
import './App.css'
import imagenUsuario from './resources/usuario.png';
import imagenEgg from './resources/egg.png';

function App() {
  const [numEgg, setNumEgg] = useState(0);

  // Función para manejar el clic en el huevo
  const handleEggClick = () => {
      setNumEgg(numEgg + 1); // Incrementa el número de huevos
  };

  return (
      <div className="dock-panel">
          {/* Header */}
          <div className="header">
              <div className="user-info">
                  <img src={imagenUsuario} alt="Usuario" className="user-icon" />
                  <span className="user-name">Nombre del Usuario</span>
              </div>
              <label className="num-egg">{numEgg}</label>
          </div>

          {/* Main Content */}
          <div className="main-content">
              {/* Egg Container */}
              <div className="egg-container">
                  <img 
                      src={imagenEgg}
                      alt="Egg" 
                      className="egg" 
                      id="egg" 
                      onClick={handleEggClick} 
                  />
              </div>

              {/* Sidebar */}
              <div className="sidebar">
                  <div className="top-bar"></div>
                  <div className="scrollable">
                      <div className="store-title">TIENDA</div>
                      <div className="tab">
                          <h3>Mejoras ratón</h3>
                          <ul className="list">
                              <li className="list-item">Mejora 1</li>
                              <li className="list-item">Mejora 2</li>
                              <li className="list-item">Mejora 3</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App
