import React, {useRef} from "react";
import { obtenerNumeroAleatorio } from "../biblioteca/biblioteca.js";

const Numericos = () =>{
    const olRef = useRef(null);
    const addNumerico = (referencia) => {
        referencia.current.innerHTML += `<li>Número: ${obtenerNumeroAleatorio(1000)}.</li>`;
    };
    return(
        <>
            <div>
                <button
                onClick={()=>{
                addNumerico(olRef);
                }}
                >
                    Añadir numerico
                </button>
                <ol ref={olRef}></ol>
            </div>
        </>
    )
}

export default Numericos;