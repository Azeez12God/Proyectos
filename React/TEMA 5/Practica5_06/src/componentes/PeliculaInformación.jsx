import React from 'react'
import { formatearFecha } from '../biblioteca/biblioteca.js'
import PeliculaProtagonistas from './PeliculaProtagonistas.jsx'
import { useContext } from 'react'
import { contextoPeliculas } from '../contextos/ProveedorPeliculas.jsx'

const PeliculaInformación = () => {
    const {peliculaSeleccionada} = useContext(contextoPeliculas);
    let pelicula = peliculaSeleccionada;

    return (
        <>
            <p><strong>Sinopsis:</strong> {pelicula.opening_crawl}</p>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Productor:</strong> {pelicula.producer}</p>
            <p><strong>Fecha de lanzamiento:</strong> {formatearFecha(
                pelicula.release_date
            )}</p>
            <br />
            <PeliculaProtagonistas protas={pelicula.characters}/>
        </>
    )
}

export default PeliculaInformación