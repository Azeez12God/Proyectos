import React, { createContext, useEffect, useState } from 'react'
import { supabaseConexion } from '../config/supabase.js';

const contextoListas = createContext();
const ProveedorListas = ({children}) => {
    const errorListaInicial = "";
    const listadoInicial = [];

    const [errorLista, setErrorLista] = useState(errorListaInicial);
    const [listadoListas, setListadoListas] = useState(listadoInicial);

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

    useEffect(()=>{
        obtenerListas();
    }, [])

    const datosProveer = {
        errorLista,
        listadoListas
    };
    return (
        <contextoListas.Provider value={datosProveer}>
            {children}
        </contextoListas.Provider>
    )
}

export default ProveedorListas;
export {contextoListas};