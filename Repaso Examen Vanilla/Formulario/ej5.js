"use strict"

import { comprobar4Digitos, comprobar5CaracteresYRequerido, comprobarLocalizacion, validarInput, valorOpcionPrestado } from "./biblioteca.js";

window.onload = () => {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const grupo = document.getElementById("grupo");
    const year = document.getElementById("year");
    const tipo = document.getElementById("tipo");
    const localizacion = document.getElementById("localizacion");
    const opcionesPrestado = document.getElementsByName("prestado");
    const mensaje = document.getElementById("mensaje");
    const botonGuardar = document.getElementById("botonGuardar");

    let listaDiscos = [];

    formulario.addEventListener(
        "change",
        (evento)=>{
            const input = evento.target;
            switch(input.id){
                case "nombre": validarInput(comprobar5CaracteresYRequerido, input); break;
                case "grupo": validarInput(comprobar5CaracteresYRequerido, input); break;
                case "year": validarInput(comprobar4Digitos, input); break;
                case "localizacion": validarInput(comprobarLocalizacion, input); break;
                default: null;
            }
        },
        false
    );

    // El botón guardar mete al array un objeto disco con los datos pasados en el formulario.
    botonGuardar.addEventListener(
        "click",
        ()=>{
            valorOpcionPrestado(opcionesPrestado);

            // Declaramos el objeto disco que se mete al array.
            const disco = {
                nombre: nombre.value,
                grupo_interprete: grupo.value,
                year: year.value,
                tipo: tipo.value,
                localizacion: localizacion.value,
                prestado: prestadoSeleccionado === "si" ? true : false,
            };
            listaDiscos = [...listaDiscos,disco];
            mensaje.innerHTML = "Disco guardado correctamente.";

            // Mostramos el mensaje en el caso de que esté escondido (en la carga de la página).
            if(mensaje.classList.contains("esconder"))
                mensaje.classList.remove("esconder");
        },
        false
    );

    const botonMostrar = document.getElementById("botonMostrar");
    const listadoDiscos = document.getElementById("listadoDiscos");

    // Al clicar al botón Mostrar desplegará una lista de todos los discos guardados anteriormente.
    botonMostrar.addEventListener(
        "click",
        ()=>{
            // Si no hay discos guardados avisa al usuario.
            if(listaDiscos.length === 0){
                mensaje.innerHTML = "No hay discos insertados.";
                if(mensaje.classList.contains("esconder"))
                    mensaje.classList.remove("esconder");
            }

            else{
                // Limpiar la visualización actual.
                listadoDiscos.innerHTML = "";

                listaDiscos.map((disco,indice)=>{
                    listadoDiscos.innerHTML += `
                        <div class="disco">
                            <h3>Disco ${indice+1} </h3>
                            <p>Nombre: ${disco.nombre}</p>
                            <p>Grupo / Intérprete: ${disco.grupo_interprete}</p>
                            <p>Año de publicación: ${disco.year}</p>
                            <p>Tipo de música: ${disco.tipo}</p>
                            <p>Localización: ${disco.localizacion}</p>
                            <p>Está prestado: ${disco.value === "true" ? "Sí" : "No"}</p>
                        </div>
                    `;
                });

                listadoDiscos.classList.remove("esconder");
            }
        },
        false
    );
};