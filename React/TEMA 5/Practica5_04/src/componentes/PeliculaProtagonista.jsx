import React, { useState } from 'react'
import { generarUuidAleatorio } from '../biblioteca/biblioteca';
import './PeliculaProtagonista.css';
import ProtagonistaInformacion from './ProtagonistaInformacion.jsx';

const PeliculaProtagonista = ({protasaMostrar}) => {
    const protaInicial = '';

    const [protaSeleccionado, setProtaSeleccionado] = useState(protaInicial);

    // Función que maneja el protagonista que ha sido clicado.
    const manejarProtaSeleccionado = (id) =>  {
        const filtrarProta = protasaMostrar.filter((prota)=>{
            return prota.value.name === id;
        });
   
        setProtaSeleccionado(filtrarProta[0]);
    }

    return (
        <>
            <h3>10 protagonistas de la película.</h3>
            <ul onClick={(evento)=>{
                if(evento.target.tagName === "LI"){
                    manejarProtaSeleccionado(evento.target.id);
                }
            }}>
                {
                    Array.isArray(protasaMostrar) && protasaMostrar.length
                    ? protasaMostrar.map((protagonista, indice)=>{
                        while(indice<10){
                            return(
                                <li key={generarUuidAleatorio()} id={protagonista.value.name}>
                                    {protagonista.value.name}
                                </li>
                            );
                        }
                    })
                    : <p>Esta película no tiene personajes.</p>
                }
            </ul>
            <div>
                {protaSeleccionado
                ? <ProtagonistaInformacion prota={protaSeleccionado}/>
                : <p>Clica en un protagonista para ver su informacion</p>
                }
            </div>
        </>
    )
}

export default PeliculaProtagonista