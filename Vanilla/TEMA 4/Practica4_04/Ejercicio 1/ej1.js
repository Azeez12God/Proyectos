    "use strict"

    import { mezclarImagenes, verificarOrden } from "../bibliotecas/biblioteca.js";

    window.onload = () => {
        // Declaramos los elementos del DOM que necesitamos para las funciones.
        const zonaArrastrable = document.getElementById("zona-con-arrastrar");
        const contenedorImagenes = document.getElementById("arrastrables")
        const arrastrables = document.getElementsByClassName("arrastrable");
        const botonRestart = document.getElementById("restart");
        const puzzle = document.getElementsByClassName("puzzle");
        const mensajeFelicitacion = document.getElementById("mensaje");

        // Orden correcto de las imágenes por sus IDs
        const ordenCorrecto = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];

        // Primero mezclamos las imágenes de tal forma que el puzzle tendrá distinto orden cada vez que se inicia la página.
        mezclarImagenes(arrastrables,contenedorImagenes);

        // Les insertamos el atributo 'draggable' a todas las imagenes.
        for(let i=0;i<arrastrables.length;i++)
            arrastrables[i].setAttribute("draggable",true);

        // Le añadimos los eventos de arrastrar y soltar al div de la zona arrastrable usando la propagación de eventos.
        zonaArrastrable.addEventListener(
            "dragstart",
            (evento) => {
                if (evento.target.tagName === "IMG"){
                    evento.dataTransfer.setData("id", evento.target.id); // Enviamos el id mediante dataTransfer de la imagen arrastrada.
                }
            },
            false
        );

        zonaArrastrable.addEventListener(
            "dragover",
            (evento)=>{
                evento.preventDefault(); // Previene el funcionamiento por defecto.
            },
            false
        );

        zonaArrastrable.addEventListener(
            "drop",
            (evento)=>{
                evento.preventDefault(); // Previene el funcionamiento por defecto.

                // Si se suelta la imagen en un elemento que tenga la clase 'soltable' se añade a ese elemento la imagen mediante la id con getData.
                if(evento.target.classList.contains("soltable")){
                    evento.target.appendChild(
                        document.getElementById(evento.dataTransfer.getData("id"))
                    );
                }
            },
            false
        );

        // Cuando termine el evento 'drop', se verifica si el puzzle está completo y correcto.
        zonaArrastrable.addEventListener(
            "dragend",
            ()=>{
                verificarOrden(puzzle,ordenCorrecto);
            },
            false
        );

        // Añadimos el evento de clicar al botón para vovler a poner las imágenes a su contenedor principal.
        botonRestart.addEventListener(
            "click",
            ()=>{
                Array.from(arrastrables).forEach((img)=>{
                    contenedorImagenes.appendChild(img);
                })

                // Obviamente si le damos a reiniciar y está el mensaje de felicitación mostrado, tenemos que quitarlo.
                if(!mensajeFelicitacion.classList.contains("esconder"))
                    mensajeFelicitacion.classList.add("esconder");

                // Volvemos a mezclar las imágenes.
                mezclarImagenes(arrastrables,contenedorImagenes);
            },
            false
        );
    }; //Fin del onload 