import React, { createContext, useEffect, useState } from 'react'
import { supabaseConexion } from '../config/supabase.js';

const contextoListas = createContext();
const ProveedorListas = ({children}) => {
    const errorListaInicial = "";
    const listadoInicial = [];
    const productosListaInicial = [];
    const listaInicial = {
        id: 0,
        fecha_creacion: "",
        id_propietario: 0,
        nombre: ""
    };

    const [errorLista, setErrorLista] = useState(errorListaInicial);
    const [listadoListas, setListadoListas] = useState(listadoInicial);
    const [productosLista, setProductosLista] = useState(productosListaInicial);
    const [lista, setLista] = useState(listaInicial);

    const obtenerListas = async () => { 
        try{
            const {data , error} = await supabaseConexion.from('Listas').select('*'); // Recordar policy en Supabase.
            if(error){
                setErrorLista(error.message);
            }
            else{
                setListadoListas(data);
            }
        }
        catch(error){
            setErrorLista(error.message)
        }
    };

    const obtenerProductosLista = async (id) => {
        try{
            const {data, error} = await supabaseConexion.from('Listas_Productos').select('cantidad, Productos(*)').eq('id_lista', id);

            if(error){
                setErrorLista(error.message);
            }
            else{
                setProductosLista(data);
            }
        }
        catch(error){
            setErrorLista(error.message);
        }
    };

    const obtenerLista = async (id) => {
        try{
            const {data, error} = await supabaseConexion.from('Listas').select('*').eq('id', id);
            if(error){
                setErrorLista(error.message);
            }
            else{
                setLista(data[0]);
            }
        }
        catch(error){
            setErrorLista(error.message);
        }
    }

    useEffect(()=>{
        obtenerListas();
    }, [])

    const datosProveer = {
        errorLista,
        listadoListas,
        obtenerProductosLista,
        productosLista,
        obtenerLista,
        lista
    };
    return (
        <contextoListas.Provider value={datosProveer}>
            {children}
        </contextoListas.Provider>
    )
}

export default ProveedorListas;
export {contextoListas};