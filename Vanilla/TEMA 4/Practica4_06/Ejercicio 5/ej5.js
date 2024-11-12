"use strict";

import { comprobar5CaracteresYRequerido } from "../Bibliotecas/biblioteca.js";

window.onload = () => {
    // Declaramos los elementos del DOM que necesitamos para el disco.
    const nombre = document.getElementById("nombre");
    const grupo = document.getElementById("grupo");
    const year = document.getElementById("year");
    const tipo = document.getElementById("tipo");
    const localizacion = document.getElementById("localizacion");
    const opcionesPrestado = document.getElementsByName("prestado");
    const mensaje = document.getElementById("mensaje");
    const botonGuardar = document.getElementById("botonGuardar");
    const formulario = document.getElementById("formulario");

    // Declaramos un array donde se guardarán los objetos disco.
    let listaDiscos = [];

    // Según se pongan datos en los inputs se validará si sun válidos o no. En caso de no serlo se pondrá el borde en rojo del input y el label en color rojo.
    formulario.addEventListener("change", (evento) => {
        const input = evento.target;

        // Tanto nombre como grupo hay que mirar si tienen 5 caracteres o más y son requeridos.
        if (input.id === "nombre") {
            if (!comprobar5CaracteresYRequerido(nombre.value)) {
                input.classList.add("errorInput");
                input.previousElementSibling.classList.add("errorLabel");
            } else {
                input.classList.remove("errorInput");
                input.previousElementSibling.classList.remove("errorLabel");
            }
        }

        if(input.id === "grupo"){
            if (!comprobar5CaracteresYRequerido(grupo)) {
                input.classList.add("errorInput");
                input.previousElementSibling.classList.add("errorLabel");
            } else {
                input.classList.remove("errorInput");
                input.previousElementSibling.classList.remove("errorLabel");
            }
        }

        // Comprobamos que el año tengo 4 dígitos.
        if(input.id === "year"){
            if(input.value.toString().length !== 4){
                input.classList.add("errorInput");
                input.previousElementSibling.classList.add("errorLabel");
            } else {
                input.classList.remove("errorInput");
                input.previousElementSibling.classList.remove("errorLabel");
            }
        }

        // Comprobamos que la localización coincida conque tenga ES-3números2letrasmayúsculas.
        if(input.id === "localizacion"){
            // Expresión regular para validar el formato ES-001AA
            const pattern = /^ES-\d{3}[A-Z]{2}$/;

            // Esto lo he tenido que buscar porque no sabía hacerlo, he entendido este método test, mira que cumpla con el patrón establecido.
            if(!pattern.test(input.value)){
                input.classList.add("errorInput");
                input.previousElementSibling.classList.add("errorLabel");
            } else {
                input.classList.remove("errorInput");
                input.previousElementSibling.classList.remove("errorLabel");
            }
        }
    }, false);

    // El botón guardar mete al array un objeto disco con los datos pasados en el formulario.
    botonGuardar.addEventListener(
        "click",
        ()=>{
            // Comprobamos el radioButton que se ha marcado.
            let prestadoSeleccionado = null;

            for(let i=0;i<opcionesPrestado.length;i++){
                if(opcionesPrestado[i].checked){
                     prestadoSeleccionado = opcionesPrestado[i].value;
                      break;
                }
            }

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
}; // Fin del onload