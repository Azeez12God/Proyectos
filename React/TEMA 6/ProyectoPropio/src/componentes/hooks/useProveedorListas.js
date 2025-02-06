import { useContext } from "react";
import { contextoListas } from "../../contextos/ProveedorListas.jsx";

const useProveedorListas = () => {
    const datosListas = useContext(contextoListas);

    return datosListas;
};

export default useProveedorListas;