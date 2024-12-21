import React from 'react'
import { createContext } from 'react'
import useDatos from '../hooks/useDatos.js';

const contextoPeliculas = createContext();
const ProveedorPeliculas = ({children}) => {
    const url = "https://swapi.py4e.com/api/films";
    
    const {peliculas, peliculaSeleccionada, error, manejarPeliculaSeleccionada, protagonistas, protaSeleccionado, manejarProtaSeleccionado, cargando, vehiculos, naves} = useDatos(url);

    const datosaExportar = {
        peliculas,
        peliculaSeleccionada,
        error,
        manejarPeliculaSeleccionada,
        protagonistas,
        protaSeleccionado,
        manejarProtaSeleccionado,
        cargando,
        vehiculos,
        naves
    };

    return (
        <contextoPeliculas.Provider value={datosaExportar}>
            {children}
        </contextoPeliculas.Provider>
    )
}

export default ProveedorPeliculas;
export {contextoPeliculas};