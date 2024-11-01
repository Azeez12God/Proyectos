"use strict"

const tabs = document.getElementsByClassName("tab");
const contenidos = document.getElementsByClassName("contenido");
const contenidoMostrado = document.getElementsByClassName("contenidoMostrado")[0];

// Ponemos el evento click a todas las pestañas.
Array.from(tabs).map((tab, indice) => {
    tab.addEventListener("click", () => {
        // El contenido mostrado será lo que haya en el contenido propio de la pestaña, es decir, la pestaña 2 mostrará el contenido 2.
        contenidoMostrado.innerHTML = contenidos[indice].innerHTML;
    });
});