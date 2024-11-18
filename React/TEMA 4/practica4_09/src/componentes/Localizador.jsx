import React, { useEffect, useState } from 'react'

const Localizador = () => {
    // Declaramos los estados que cambiarán las coordenadas X e Y respectivamente.
    const [coordenadaX, setCoordenadaX] = useState(0);
    const [coordenadaY, setCoordenadaY] = useState(0);

    // Función que cambia las coordenadas X e Y de los estados.
    const cambiarCoordenadas = () => {
        setCoordenadaX(evento.pageX);
        setCoordenadaY(evento.pageY);
    }

    useEffect(()=>{
        // Declaramos un evento mousemove en el documento (padre del DOM) que usa la función declarada arriba.
        document.addEventListener("mousemove", cambiarCoordenadas, false);

        // Borramos el evento cuando se desmonte el componente.
        return () => {
            document.removeEventListener("mousemove", cambiarCoordenadas);
        }
    }, []);

    return (
        <>
            <p>Coordenada X: {coordenadaX} ; Coordenada Y: {coordenadaY}</p>
        </>
    )
}

export default Localizador