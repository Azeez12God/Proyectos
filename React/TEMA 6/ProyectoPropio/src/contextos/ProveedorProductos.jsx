import React, { createContext, useEffect, useState } from 'react'
import { supabaseConexion } from '../config/supabase.js';

// Crear contexto de productos
const contextoProductos = createContext();

const ProveedorProductos = ({children}) => {
    const listadoInicial = [];
    const errorInicial = "";
    const productoInicial = {
        name: "",
        peso: 0,
        precio: 0,
        descripcion: "",
        imagen: ""
    };

    // Estados para productos y errores
    const [listadoProductos, setListadoProductos] = useState(listadoInicial);
    const [errorProductos, setErrorProductos] = useState(errorInicial);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [producto, setProducto] = useState(productoInicial);

    // Obtener productos de la base de datos
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

    // Cargar todos los productos
    const cargarProductos = () => { setProductosFiltrados(listadoProductos)};

    // Filtrar productos por nombre
    const filtrarProductosNombre = (nombre) => {
        let filtrarNombre = listadoProductos.filter((producto)=>{
            return producto.nombre.toLowerCase().includes(nombre.toLowerCase());
        });

        setProductosFiltrados(filtrarNombre);
    }

    // Filtrar productos por precio
    const filtrarProductosPrecio = (precio) => {
        let filtrarPrecio = listadoProductos.filter((producto)=>{
            return producto.precio.toString().includes(precio);
        });

        setProductosFiltrados(filtrarPrecio);
    }

    // Filtrar productos por peso
    const filtrarProductosPeso = (peso) => {
        let filtrarPeso = listadoProductos.filter((producto)=>{
            return producto.peso.toString().includes(peso);
        });

        setProductosFiltrados(filtrarPeso);
    }

    // Ordenar productos por nombre
    const ordenarProductosNombre = () => {
        let ordenarPorNombre = [...listadoProductos].sort((a, b)=>{
            return a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
        });

        setProductosFiltrados(ordenarPorNombre);
    }

    // Ordenar productos por precio
    const ordenarProductosPrecio = () => {
        let ordenarPorPrecio = [...listadoProductos].sort((a,b)=>{
            return a.precio - b.precio
        });

        setProductosFiltrados(ordenarPorPrecio);
    }

    // Ordenar productos por peso
    const ordenarProductosPeso = () => {
        let ordenarPorPeso = [...listadoProductos].sort((a,b)=>{
            return a.peso - b.peso
        });

        setProductosFiltrados(ordenarPorPeso);
    }

    // Actualizar producto en el formulario.
    const actualizarProducto = (evento) => {
        const { name, value } = evento.target;
        setProducto({ ...producto, [name]: value });
    };

    // Datos a proveer en el contexto
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
        ordenarProductosPeso,
        actualizarProducto,
        producto
    };

    // Efecto para cargar productos al montar el componente
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