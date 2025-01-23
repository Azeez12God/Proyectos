import "./App.css";
import ProveedorSesion from "./contextos/ProveedorSesion.jsx";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Menu from "./componentes/estructura/Menu.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import RutasUT06 from "./componentes/rutas/RutasUT06.jsx";
import ProveedorProductos from "./contextos/ProveedorProductos.jsx";

function App() {
  return (
    <>
      <ProveedorSesion>
        <Cabecera/>
        <Menu/>
        <ProveedorProductos>
          <Contenido>
            <RutasUT06/>
          </Contenido>
        </ProveedorProductos>
        <Pie/>
      </ProveedorSesion>
    </>
  );
}

export default App;
