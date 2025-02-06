import React, { createContext, useEffect, useState } from 'react'
import { supabaseConexion } from '../config/supabase.js';
import { useNavigate } from 'react-router-dom';
import { generarUuidAleatorio } from '../bibliotecas/biblioteca.js';

// Crear contexto de productos
const contextoProductos = createContext();

const ProveedorProductos = ({children}) => {
    const listadoInicial = [];
    const errorInicial = "";
    const productoInicial = {
        nombre: "",
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

    const navegar = useNavigate(null);

    // Obtener productos de la base de datos
    const obtenerListado = async () => {
        try{
            const {data, error} = await supabaseConexion.from("Productos").select("*").order("created_at", {ascending: true});
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
        if(precio === ""){return setProductosFiltrados(listadoProductos);}
        else {
            let filtrarPrecio = listadoProductos.filter((producto)=>{
                return producto.precio <= precio;
            });
    
            setProductosFiltrados(filtrarPrecio);
        }
    }

    // Filtrar productos por peso
    const filtrarProductosPeso = (peso) => {
        if(peso === ""){return setProductosFiltrados(listadoProductos);}
        else {
            let filtrarPeso = listadoProductos.filter((producto)=>{
                return producto.peso <= peso;
            });
    
            setProductosFiltrados(filtrarPeso);
        }
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

    const insertarProducto = async () => {
        try{
            producto.id = generarUuidAleatorio();
            const {error} = await supabaseConexion.from("Productos").insert(producto);
            if(error){ setErrorProductos(error.message);}
            else{
                setProducto(productoInicial);
                obtenerListado();
                navegar("/productos");
            }
        }
        catch(error){
            setErrorProductos(error.message);
        }
    };

    const borrarProducto = async (id) => {
        try{
            const {error, count} = await supabaseConexion.from("Productos").delete().eq("id", id);

            if(error){ setErrorProductos(error);}
            else if(count===0){ setErrorProductos("No se ha podido borrar el producto");}
            else{obtenerListado();}
        }
        catch(error){
            setErrorProductos(error.message);
        }
    };

    const editarProducto = async () => {
        try{
            const {error} = await supabaseConexion.from("Productos").update(producto).eq("id", producto.id);
            if(error){
                setErrorProductos(error.message);
            }
            else{
                setProducto(productoInicial);
                obtenerListado();
                navegar("/productos");
            }
        }
        catch(error){
            setErrorProductos(error.message);
        }
    };

    const obtenerProducto = async (id) => {
        setErrorProductos(errorInicial);
        try{
            const {data, error} = await supabaseConexion.from("Productos").select("*").eq("id", id);
            if(error){ setErrorProductos(error.message);}
            else{
                setProducto(data[0]);
            }
        }
        catch(error){
            setErrorProductos(error.message);
        }
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
        producto,
        insertarProducto,
        borrarProducto,
        editarProducto,
        obtenerProducto
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