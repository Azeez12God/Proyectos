import React from 'react'
import { formatearFecha } from '../biblioteca/biblioteca.js'
import PeliculaProtagonistas from './PeliculaProtagonistas.jsx'

const PeliculaInformación = ({pelicula}) => {
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