import React, { useEffect, useState } from 'react'

const Contador = () => {
    // Declaramos dos estados que permiten controlar el contador de clicks del documento.
    const [contador, setContador] = useState(0);
    const [contador5, setContador5] = useState(0);

    // Función que aumenta el contador y cuando sea divisible de 5 lo iguala al contador de divisibles de 5.
    const aumentarContador = () => {
        let contadorNuevo = contador;
        contadorNuevo = contador + 1;
        setContador(contadorNuevo);

        if(contador % 5 == 0)
            setContador5(contador);
    }

    // Declaramos un efecto para añadir el evento click al documento y quitárselo cuando se desmonte, además depende del contador.
    useEffect(()=>{
        document.addEventListener("click",aumentarContador,false);
        return () => {
            document.removeEventListener("click",aumentarContador);
        }
    }, [contador]);

    return (
        <>
        {/** Ponemos el párrafo que se vaya actualizando cuando sea divisible entre 5. */}
            <p>Estimado usuario/a, has pulsado {contador % 5 === 0 ? contador : contador5} veces el ratón.</p>
        </>
    )
}

export default Contador