import React, { useEffect, useState } from 'react'

const Cronometro = () => {
    // Declaramos los estados para ir cambiando los segundos, las centésimas y regular si el cronómetro está activo.
    const [segundos, setSegundos] = useState(0);
    const [centesimas, setCentesimas] = useState(0);
    const [activo, setActivo] = useState(true);

    // Función para pausar el cronómetro.
    const pausarCronometro = () => {
        setActivo(!activo);
    }
    
    // Función para reiniciar el cronómetro.
    const reiniciarCronometro = () => {
        setCentesimas(0);
        setSegundos(0);
    }

    // Declaramos un efecto para manejar el intervalo y limpiar los eventos y el intervalo cuando se desmonte el componente.
    useEffect(()=>{
        let intervalo;
        if(activo){
            // Hacemos que el intervalo sea cada 10ms para que cuadre más o menos con la realidad.
            intervalo = setInterval(()=>{
                setCentesimas((centesimas) => {
                    if (centesimas + 1 === 100) {
                        // Sumamos 1 segundo y ponemos las centésimas a 0.
                        setSegundos((segundos) => segundos + 1);
                        return 0;
                    }
                    return centesimas + 1;
                });
            },10);   
        }

        else
            clearInterval(intervalo);

        return () =>  {
            clearInterval(intervalo);
            document.removeEventListener("click",pausarCronometro);
            document.removeEventListener("click",reiniciarCronometro);
        }
    }, [activo]);

    return (
        <>
            <p>{segundos} <small>{centesimas}</small></p>
            <button onClick={()=>{
                pausarCronometro();
            }}>
                {activo ? `Parar` : `Reanudar`}
            </button>

            <button onClick={()=>{
                reiniciarCronometro();
            }}>
                Reiniciar
            </button>
        </>
    )
}

export default Cronometro