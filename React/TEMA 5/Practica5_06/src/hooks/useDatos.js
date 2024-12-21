import { useEffect, useState } from "react";
import { obtenerDatos } from "../biblioteca/biblioteca.js";

const useDatos = (url) => {
    const peliculasIniciales = [];
    const peliculaSeleccionadaInicial = "";
    const errorInicial = "";

    // Declaramos los estados del componente.
    const [peliculas, setPeliculas] = useState(peliculasIniciales);
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(peliculaSeleccionadaInicial);
    const [error, setError] = useState(errorInicial);
    const [cargando, setCargando] = useState(false);

    // Función que maneja la película que está siendo seleccionada al clicar un li.
    const manejarPeliculaSeleccionada = (id) => {
        const filtrarPelicula = peliculas.filter((pelicula)=>{
        return pelicula.episode_id === parseInt(id); // El id es un número.
        });
        setPeliculaSeleccionada(filtrarPelicula[0]);
    }

    // Función que trae las peliculas de la API con await y las guarda en el estado.
    const traerPeliculas = async() => {
        try{
            setCargando(true);
            const datos = await obtenerDatos(url);
            setPeliculas(datos.results);
        }catch(error){
        setError(`Se ha producido un error en la película: ${error.message}`)
        }
        finally{
            setCargando(false);
        }
    }

    // Traemos las películas al principio del componente.
    useEffect(()=>{
        traerPeliculas();
    }, []);


    const protasIniciales = [];
    const [protagonistas, setProtagonistas] = useState(protasIniciales);
    const protaInicial = '';
    const [protaSeleccionado, setProtaSeleccionado] = useState(protaInicial);
    const vehiculosIniciales = [];
    const [vehiculos, setVehiculos] = useState(vehiculosIniciales);
    const navesIniciales = [];
    const [naves, setNaves] = useState(navesIniciales);

    // Función que recoge los datos de cada protagonista en una promesa y luego las consume a la vez.
    const traerProtagonistas = async (protas) => {
        try{
            let promesas = [];
            setCargando(true);
            protas.map((prota)=>{
                promesas = [...promesas, obtenerDatos(prota)];
            });

            let promesasConsumidas = await Promise.allSettled(promesas);
            setProtagonistas(promesasConsumidas);
        }
        catch(error){
            setError(`Se ha producido un error al cargar los protagonistas: ${error.message}`)
        }
        finally{
            setCargando(false);
        }
    };

    useEffect(() => {
        if (peliculaSeleccionada && peliculaSeleccionada.characters) {
            traerProtagonistas(peliculaSeleccionada.characters);
        } else {
            setProtagonistas(protasIniciales);
        }
    }, [peliculaSeleccionada]);

    // Función que maneja el protagonista que ha sido clicado.
    const manejarProtaSeleccionado = (id) =>  {
        const filtrarProta = protagonistas.filter((prota)=>{
            return prota.value.name === id;
        });
   
        setProtaSeleccionado(filtrarProta[0]);
    }

    // Función que recoge los datos de los vehiculos de los protagonistas.
    const traerVehiculos = async (vehiculos) => {
        try{
            let promesas = [];
            setCargando(true);
            vehiculos.map((vehiculo)=>{
                promesas = [...promesas, obtenerDatos(vehiculo)];
            });

            let promesasConsumidas = await Promise.allSettled(promesas);
            setVehiculos(promesasConsumidas);
        }
        catch(error){
            setError(`Se ha producido un error al cargar los vehículos: ${error.message}`);
        }
        finally{
            setCargando(false);
        }
    }

    // Función que recoge los datos de las naves de los protagonistas.
    const traerNaves = async (naves) => {
        try{
            let promesas = [];
            naves.map((nave)=>{
                promesas = [...promesas, obtenerDatos(nave)];
            });
            let promesasConsumidas = await Promise.allSettled(promesas);
            setNaves(promesasConsumidas);
        }
        catch (error){
            setError(`Se ha producido un error al cargar los vehículos: ${error.message}`);
        }
        finally{
            setCargando(false);
        }
    }

    // Traemos los vehículos y naves al seleccionar un protagonista, en caso de que tenga.
    useEffect(()=>{
        if(protaSeleccionado){
            if(protaSeleccionado.value.vehicles)
                traerVehiculos(protaSeleccionado.value.vehicles)     
            else
                setVehiculos(vehiculosIniciales)

            if(protaSeleccionado.value.starships)
                traerNaves(protaSeleccionado.value.starships)
            else
                setNaves(navesIniciales);
        }
        else{
            setVehiculos(vehiculosIniciales);
            setNaves(navesIniciales);
        }
    }, [protaSeleccionado])

    // Devolvemos los datos a exportar.
    return {peliculas, peliculaSeleccionada, error, cargando, protagonistas, protaSeleccionado, manejarPeliculaSeleccionada, manejarProtaSeleccionado, vehiculos, naves}
}

export default useDatos;