"use strict"

import { generaNumeroAleatorio } from "../../biblioteca/biblioteca.js";

window.onload = () => {
    let numeroAleatorio = 0;
    const promesa = new Promise((resolver, rechazar)=>{
        setTimeout(()=>{
            numeroAleatorio = generaNumeroAleatorio(100);

            if(numeroAleatorio % 2 == 0)
                resolver(numeroAleatorio);
            else
                rechazar(new Error(`El valor del número aleatorio es impar.`));
        }, 2000)
    });
   
    promesa
        .then((datos)=>{
            console.log(`${datos} es par.`);
        })
        .catch((error)=>{
            console.log(error.message);
        });
};