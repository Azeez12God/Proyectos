import React, {useRef} from 'react';
import './Parrafico.css';
import { generarColorAleatorio } from '../biblioteca/biblioteca.js';

const Parrafico = () => {
    const refe = useRef(null);
    const cambiarColor = (referencia) => {
        referencia.current.style.backgroundColor = generarColorAleatorio();
    };
    return (
        <>
            <div>
                <p ref={refe}>Párrafo feo</p>
                <button
                    onClick={()=>{
                        cambiarColor(refe);
                    }}
                >
                    Cambiar colorico
                </button>
            </div>
        </>
    )
}

export default Parrafico;