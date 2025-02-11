import React, { createContext, useEffect, useState } from 'react'
import { supabaseConexion } from '../config/supabase.js';
import { generarUuidAleatorio } from '../bibliotecas/biblioteca.js';
import { useNavigate } from 'react-router-dom';

const contextoListas = createContext();
const ProveedorListas = ({children}) => {
    const errorListaInicial = "";
    const listadoInicial = [];
    const listaInicial = {
        id: 0,
        fecha_creacion: "",
        id_propietario: 0,
        nombre: ""
    };

    // Estados de la lista.
    const [errorLista, setErrorLista] = useState(errorListaInicial);
    const [listadoListas, setListadoListas] = useState(listadoInicial);
    const [lista, setLista] = useState(listaInicial);

    const navegar = useNavigate(null);

    // Función para obtener las listas de la base de datos.
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

    // Función para obtener la lista seleccionada.
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
    };

    // Función para actualizar el estado de lista en el formulario.
    const actualizarLista = (evento) => {
        const {name, value} = evento.target;
        setLista({...lista, [name]: value});
    };

    // Función para insertar la lista en la base de datos.
    const insertarLista = async (usuario) => {
        try{
            lista.id = generarUuidAleatorio();
            lista.id_propietario = usuario.id;
            const {fecha_creacion, ...listaSinFecha} = lista;

            const {error} = await supabaseConexion.from('Listas').insert(listaSinFecha);
            if(error){
                setErrorLista(error.message);
            }
            else{
                obtenerListas();
                navegar('/listas');
            }
        }
        catch(error){
            setErrorLista(error.message);
        }
    };

    // Función para borrar la lista en la base de datos.
    const borrarLista = async (id) => {
        try{
            const {error, count} = await supabaseConexion.from('Listas').delete().eq('id', id);
            if(error){setErrorLista(error.message);}
            else if(count===0){setErrorLista(`No se ha podido borrar la lista.`);}
            else{obtenerListas();}
        }
        catch(error){
            setErrorLista(error.message);
        }
    }

    // Efecto para obtener las listas al montar el componente.
    useEffect(()=>{
        obtenerListas();
    }, [])

    const datosProveer = {
        errorLista,
        listadoListas,
        obtenerLista,
        lista,
        actualizarLista,
        insertarLista,
        borrarLista
    };
    return (
        <contextoListas.Provider value={datosProveer}>
            {children}
        </contextoListas.Provider>
    )
}

export default ProveedorListas;
export {contextoListas};