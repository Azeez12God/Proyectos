import React from 'react'
import './Disco.css';

const Disco = (props) => {
    const {indice, nombre, grupo, year, tipo, localizacion} = props;
    return (
        <>
            <div className='disco'>
                <h3>Disco {indice+1} </h3>
                <p>Nombre: {nombre}</p>
                <p>Grupo / Intérprete: {grupo}</p>
                <p>Año de publicación: {year}</p>
                <p>Tipo de música: {tipo}</p>
                <p>Localización: {localizacion}</p>
            </div>
        </>
    )
}

export default Disco