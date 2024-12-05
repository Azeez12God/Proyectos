import React, { useEffect, useState } from 'react'
import './PeliculaLista.css';
import { generarUuidAleatorio } from '../biblioteca/biblioteca.js';

const PeliculaLista = () => {
    const url = "https://swapi.dev/api/films";
    const peliculasIniciales = [];
    const errorInicial = "";
    const [peliculas, setPeliculas] = useState(peliculasIniciales);
    const [error, setError] = useState(errorInicial);

    const traerPeliculas = () => {
        // Al cargar la página consumimos la URL para que muestre las películas o salga error.
        fetch(url)
        .then((respuesta)=>{
            return respuesta.json();
        })
        .then((datos)=>{
            setPeliculas(datos.results);
        })
        .catch((error)=>{
            setError(error);
        });
    }

    useEffect(()=>{
        traerPeliculas();
    }, [])

    return (
        <>
            <div className="contenedor-peliculas">
                <h2>Películas Star Wars</h2>
                {error ? (
                <p>Error al cargar las películas: {error}</p>
            ) : (
                <ul className="peliculas-lista" id="peliculas-lista">
                    {peliculas.map((pelicula) => (
                        <li key={pelicula.episode_id}>
                            Episodio {pelicula.episode_id}: {pelicula.title}
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </>
    )
}

export default PeliculaLista