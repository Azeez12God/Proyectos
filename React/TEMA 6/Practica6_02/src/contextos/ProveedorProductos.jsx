import React, { createContext, useEffect, useState } from 'react'
import { supabaseConexion } from '../config/supabase.js';

const contextoProductos = createContext();

const ProveedorProductos = ({children}) => {
    const listadoInicial = [];
    const errorInicial = "";
    const productoInicial = {
        nombre: "",
        peso:"",
        precio:"",
        imagen:"",
        descripcion:""
    };

    const [listadoProductos, setListadoProductos] = useState(listadoInicial);
    const [errorProductos, setErrorProductos] = useState(errorInicial);
    const [producto, setProducto] = useState(productoInicial);

    const obtenerListado = async () => {
        try{
            const {data, error} = await supabaseConexion.from("Productos").select("*");
            setListadoProductos(data);
        }
        catch(error){
            setErrorProductos(error.message);
        }
    };

    const filtrarProductosNombre = (nombre) => {
        const listadoProductosFiltrados = listadoProductos.filter((producto)=>{
            return producto.nombre.includes(nombre);
        });
    }

    const datosProveer = {
        listadoProductos,
        errorProductos,
    };

    useEffect(()=>{
        obtenerListado();
    }, [])

    return (
        <contextoProductos.Provider value={datosProveer}>
            {children}
        </contextoProductos.Provider>
    );
}

export default ProveedorProductos;
export {contextoProductos}