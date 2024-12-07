import React from 'react'
import { formatearFecha } from '../biblioteca/biblioteca.js'

const PeliculaInformación = ({sinopsis, director, productor, fechaLanzamiento}) => {
    return (
        <>
            <p><strong>Sinopsis:</strong> {sinopsis}</p>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Productor:</strong> {productor}</p>
            <p><strong>Fecha de lanzamiento:</strong> {formatearFecha(
                fechaLanzamiento
            )}</p>
        </>
    )
}

export default PeliculaInformación