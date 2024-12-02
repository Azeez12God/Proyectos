"use strict"

import { mostrarListaPeliculas, formatearFecha, mostrarInformacion } from "./biblioteca/biblioteca.js";

window.onload = () => {
    const url = "https://swapi.dev/api/films";

    // Declaramos los elementos DOM que necesitamos.
    const listaPeliculas = document.getElementById("peliculas-lista");
    const infoTitulo = document.getElementById("informacion-titulo");
    const infoDatos = document.getElementById("informacion-datos");

    // Al cargar la página consumimos la URL para que muestre las películas o salga error.
    fetch(url)
        .then((respuesta)=>{
            return respuesta.json();
        })
        .then((datos)=>{
            mostrarListaPeliculas(datos.results, listaPeliculas);
        })
        .catch((error)=>{
            console.error(error);
        });

    // Añadimos el evento de clicar a todos los LI de la lista de películas que hemos añadido arriba.
    listaPeliculas.addEventListener(
        "click",
        (evento)=>{
            if(evento.target.tagName === "LI"){
                fetch(url)
                    .then((respuesta)=>{
                        return respuesta.json();
                    })
                    .then((datos)=>{
                        // Consumimos la API para mostrar la información de la película.
                        infoDatos.innerHTML = ""; // Primero vacíamos el div por si hay algún error.
                        mostrarInformacion(datos.results, infoTitulo, infoDatos, evento);
                    })
                    .catch((error)=>{
                        console.error(error);
                    });
            }
        },
        false
    );    
}; // Fin del onload