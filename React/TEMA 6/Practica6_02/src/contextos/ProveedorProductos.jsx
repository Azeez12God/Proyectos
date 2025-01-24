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
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    const obtenerListado = async () => {
        try{
            const {data, error} = await supabaseConexion.from("Productos").select("*");
            setListadoProductos(data);
            setProductosFiltrados(data);
        }
        catch(error){
            setErrorProductos(error.message);
        }
    };

    const cargarProductos = () => { setProductosFiltrados(listadoProductos)};

    const filtrarProductosNombre = (nombre) => {
        let filtrarNombre = listadoProductos.filter((producto)=>{
            return producto.nombre.toLowerCase().includes(nombre.toLowerCase());
        });

        setProductosFiltrados(filtrarNombre);
    }

    const filtrarProductosPrecio = (precio) => {
        let filtrarPrecio = listadoProductos.filter((producto)=>{
            return producto.precio.toString().includes(precio);
        });

        setProductosFiltrados(filtrarPrecio);
    }

    const filtrarProductosPeso = (peso) => {
        let filtrarPeso = listadoProductos.filter((producto)=>{
            return producto.peso.toString().includes(peso);
        });

        setProductosFiltrados(filtrarPeso);
    }

    const ordenarProductosNombre = () => {
        let ordenarPorNombre = [...listadoProductos].sort((a, b)=>{
            return a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
        });

        setProductosFiltrados(ordenarPorNombre);
    }

    const ordenarProductosPrecio = () => {
        let ordenarPorPrecio = [...listadoProductos].sort((a,b)=>{
            return a.precio - b.precio
        });

        setProductosFiltrados(ordenarPorPrecio);
    }

    const ordenarProductosPeso = () => {
        let ordenarPorPeso = [...listadoProductos].sort((a,b)=>{
            return a.peso - b.peso
        });

        setProductosFiltrados(ordenarPorPeso);
    }

    const datosProveer = {
        listadoProductos,
        errorProductos,
        filtrarProductosNombre,
        productosFiltrados,
        cargarProductos,
        filtrarProductosPrecio,
        filtrarProductosPeso,
        ordenarProductosNombre,
        ordenarProductosPrecio,
        ordenarProductosPeso
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