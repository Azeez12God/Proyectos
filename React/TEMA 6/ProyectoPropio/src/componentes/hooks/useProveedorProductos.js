import { useContext } from "react"
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx"

const useProveedorProductos = () => {
    const datosProductos = useContext(contextoProductos);

    return datosProductos;
}

export default useProveedorProductos;