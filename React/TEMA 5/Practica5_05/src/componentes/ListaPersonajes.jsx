import React from 'react'
import { generarUuidAleatorio } from '../biblioteca/biblioteca'
import './ListaPersonajes.css'

const ListaPersonajes = ({personajes, seleccionarPersonaje}) => {
    return (
        <>
            <div className='contenedor-personajes'>
                <h2>Personajes de One Piece</h2>
                <ul className='personajes-lista' id='personajes-lista'
                    onClick={(evento)=>{
                        if(evento.target.tagName==="LI"){
                            seleccionarPersonaje(evento.target.id);
                        }
                    }}
                >
                    {personajes.map((personaje, indice)=>{
                        if(indice<20){
                            return(
                                <li 
                                    key={generarUuidAleatorio()}
                                    id={personaje.id}
                                >
                                    {personaje.name}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export default ListaPersonajes