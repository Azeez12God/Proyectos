import React, { useState } from 'react'
import { generarNumeroAleatorio } from '../biblioteca/biblioteca.js';

const Listado = () => {

    const [numeros,setNumeros] = useState([]);

    // Función que añade al array de números un número aleatorio mientras no sea repetido.
    const generaNumero = () => {       
        let numeroAleatorio
         // Verificamos que el número no esté ya en el array
         do {
            numeroAleatorio = generarNumeroAleatorio(1,100);
          } while (numeros.includes(numeroAleatorio));
          setNumeros([...numeros, numeroAleatorio]);
    };


    return (
        <>
            <div>
                <ul>
                    {numeros.map((numero,indice)=>{
                        return(
                            <li key={indice}>{numero}</li>
                        );
                    })}
                </ul>
            </div>
            <div>
                {/*Botón que al clicar hará la función declarada arriba.*/}
                <button
                    onClick={()=>{
                        generaNumero();
                    }}
                >
                    Generar
                </button>
                {/*Botón que al clicar vaciará el array de números del estado. */}
                <button
                    onClick={()=>{
                        setNumeros([]);
                    }}
                >
                    Eliminar
                </button>
            </div>
        </>
    )
}

export default Listado