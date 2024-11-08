"use strict"

import { comprobarPar, generarNumeroAleatorio } from "../Bibliotecas/biblioteca.js";

window.onload = () => {
    const cajaBotones = document.getElementById("cajaBotones"); 

    // Generamos los checkbox con sus valores aleatorios.
    for(let i=0;i<100;i++){
        let numeroAleatorio =  generarNumeroAleatorio(100,1000);
        cajaBotones.innerHTML += `<input type="checkbox" id="numero${i}" name="numeroCheckbox" value=${numeroAleatorio}/>`;
        cajaBotones.innerHTML += `<label for="numero${i}">${numeroAleatorio}</label>`;
    }

    const botonPares = document.getElementById("marcarPares");
    const checkboxes = document.getElementsByName("numeroCheckbox");
    
    // Cuando clicamos al botón de marcar los pares, marcará todas las checkbox que tengan un valor par.
    botonPares.addEventListener(
        "click",
        ()=>{
            Array.from(checkboxes).map((checkbox)=>{
                if(comprobarPar(parseInt(checkbox.value))) // Se le hace parseInt porque el value está en string
                    checkbox.checked = true;
                else
                    checkbox.checked = false;

            });
        },
        false
    );

    const botonDesmarcar = document.getElementById("desmarcar");

    // Botón para desmarcar todas las checkbox al clicarlo.
    botonDesmarcar.addEventListener(
        "click",
        ()=>{
            Array.from(checkboxes).map((checkbox)=>{
                checkbox.checked = false;
            });
        },
        false
    );
}; // Fin del onload.
