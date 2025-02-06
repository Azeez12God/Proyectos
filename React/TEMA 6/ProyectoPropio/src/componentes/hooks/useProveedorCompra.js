import { useContext } from "react"
import { contextoCompra } from "../../contextos/ProveedorCompra.jsx"

const useProveedorCompra= () => {
    const datosCompras = useContext(contextoCompra);

    return datosCompras;
}

export default useProveedorCompra;