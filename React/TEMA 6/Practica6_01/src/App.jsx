import "./App.css";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Navegacion from "./componentes/estructura/Navegacion.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import RutasUT06 from "./componentes/UT06/rutas/RutasUT06.jsx";
import ProveedorSesion from "./contextos/ProveedorSesion.jsx";

function App() {
  return (
    <>
      <ProveedorSesion>
        <Cabecera />
        <Navegacion />
        <Contenido>
          <RutasUT06 />
        </Contenido>
      <Pie />
      </ProveedorSesion>
    </>
  );
}

export default App;
