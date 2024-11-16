import React from 'react'
import Discente from './Discente.jsx';
import { generarUuidAleatorio } from '../biblioteca/biblioteca.js';
import './Discentes.css'

const Discentes = (props) => {
    const {discentes, borrarAlumno} = props;
    
    return (
        <>
            <div id='discentes'>
                {discentes.length
                ? discentes.map((discente)=>{
                    return(
                        <Discente key={generarUuidAleatorio()} 
                        id={discente.id}
                        nombre={discente.nombre}
                        apellidos={discente.apellidos}
                        curso={discente.curso}
                        aficiones={discente.aficiones}
                        comida={discente.comida}
                        borrarAlumno={borrarAlumno}
                        />
                    );
                })
                : `No se han encontrado alumnos.`
                }
            </div>
        </>
    )
}

export default Discentes