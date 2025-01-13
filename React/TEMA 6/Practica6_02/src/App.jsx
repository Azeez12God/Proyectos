import "./App.css";
import ProveedorSesion from "./contextos/ProveedorSesion.jsx";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Menu from "./componentes/estructura/Menu.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import RutasUT06 from "./componentes/rutas/RutasUT06.jsx";

function App() {
  return (
    <>
      <ProveedorSesion>
        <Cabecera/>
        <Menu/>
        <Contenido>
          <RutasUT06/>
        </Contenido>
        <Pie/>
      </ProveedorSesion>
    </>
  );
}

export default App;
