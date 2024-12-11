import React, { useEffect, useState } from 'react'
import { obtenerDatos } from '../biblioteca/biblioteca.js';
import PeliculaProtagonista from './PeliculaProtagonista.jsx';

const PeliculaProtagonistas = ({protas}) => {
    const protasIniciales = [];
    const [protagonistas, setProtagonistas] = useState(protasIniciales);

    // Función que recoge los datos de cada protagonista en una promesa y luego las consume a la vez.
    const traerProtagonistas = async (protas) => {
        let promesas = [];
        protas.map((prota)=>{
            promesas = [...promesas, obtenerDatos(prota)];
        });

        let promesasConsumidas = await Promise.allSettled(promesas);
        setProtagonistas(promesasConsumidas);
    }

    useEffect(()=>{
        traerProtagonistas(protas);
    }, [protagonistas])

    return (
        <>
            <PeliculaProtagonista protasaMostrar={protagonistas}/>
        </>
    )
}

export default PeliculaProtagonistas