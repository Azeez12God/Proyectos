import React, { useRef } from 'react'
import './InfoPersonaje.css'

const InfoPersonaje = ({personaje}) => {
    const frutaRef = useRef(null);

    // Función que muestra la información según la referencia.
    const mostrarInformacion = (referencia) => {
        referencia.current.classList.toggle("esconder");
    };

    return (
        <>
            <p><strong>Trabajo:</strong> {personaje.job === "" ? "No tiene trabajo." : personaje.job}</p>
            <p><strong>Tamaño:</strong> {personaje.size === "" ? "No está documentado." : personaje.size}</p>
            <p><strong>Edad:</strong> {personaje.age === "" ? "No está documentada." : personaje.age}</p>
            <p><strong>Recompensa:</strong> {personaje.bounty === "" ? "No tiene recompensa." : personaje.bounty}</p>
            <div className='info-botones'>
                <button
                    onClick={()=>{
                        mostrarInformacion(frutaRef);
                    }}
                >
                    Fruta
                </button>
            </div>
            <div className='info-fruta esconder' ref={frutaRef}>
                {personaje.fruit
                ? 
                    <>
                        <p><strong>Nombre:</strong> {personaje.fruit.name}</p>
                        <p><strong>Descripción:</strong> {personaje.fruit.description}</p>
                    </>
                :
                    <p>Este personaje no tiene fruta.</p>    
                }
            </div>
        </>
    )
}

export default InfoPersonaje