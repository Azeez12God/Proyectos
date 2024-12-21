import React, { useEffect, useState } from 'react'
import './PeliculaLista.css';
import { generarUuidAleatorio } from '../biblioteca/biblioteca.js';
import { useContext } from 'react';
import { contextoPeliculas } from '../contextos/ProveedorPeliculas.jsx';

const PeliculaLista = () => {
    const {peliculas, manejarPeliculaSeleccionada} = useContext(contextoPeliculas);

    return (
        <>
            <div className="contenedor-peliculas">
                <h2>Películas Star Wars</h2>
                <ul className="peliculas-lista" id="peliculas-lista"
                    onClick={(evento)=>{
                        if(evento.target.tagName === "LI"){
                            manejarPeliculaSeleccionada(evento.target.id);
                        }
                    }}
                >
                    {peliculas.map((pelicula) => (
                        <li 
                            key={generarUuidAleatorio()}
                            id={pelicula.episode_id}
                        >
                            Episodio {pelicula.episode_id}: {pelicula.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PeliculaLista