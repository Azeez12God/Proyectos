import React, { useEffect } from 'react'
import { generarColorAleatorio } from '../biblioteca/biblioteca.js';

const Colorines = () => {
    // Declaramos una función que cambia el color del fondo del documento a uno aleatorio.
    const cambiarColorDelFondo = () =>{
        document.body.style.backgroundColor = generarColorAleatorio();
    };

    // Declaramos un efecto que añada el evento al cargar el componente y luego se lo quite al desmontarlo.
    useEffect(()=>{
        document.addEventListener("click",cambiarColorDelFondo,false);

        return () => {
            document.removeEventListener("click",cambiarColorDelFondo);
        };
    }, [])

    return (
        <>
            
        </>
    )
}

export default Colorines