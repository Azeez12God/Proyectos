"use strict";

// Definimos las variables según los elementos que necesitemos.
const parrafos = document.getElementsByTagName("p");

const enlaces = document.getElementsByTagName("a");

const segundoParrafo = document.body.firstElementChild.nextElementSibling;

const primerEnlace = enlaces[0];

// Al querer el penúltimo hay que restarle 2 a los enlaces.
const lastEnlace = enlaces[(enlaces.length-2)]


const idTimeOut = setTimeout(() => {
  const info = document.getElementById("info");
  info.innerHTML += `<p>Se han encontrado <strong>${parrafos.length}</strong> parrafos en el documento.</p>`;
  info.innerHTML += `<p>El contendio del segundo párrafo es:${
    segundoParrafo?.innerHTML
      ? segundoParrafo.innerHTML
      : "No hay segundo párrafo."
  }.</p>`;
  info.innerHTML += `<p>Se han encontrado <strong>${enlaces.length}</strong> enlaces en esta web.</p>`;
  info.innerHTML += `<p>La dirección del primer enlace es: ${
    primerEnlace?.href // Ver si hay algún enlace.
    ? primerEnlace.href
    : "No hay enlaces."
  }.</p>`;
  info.innerHTML += `<p>La dirección del penúltimo enlace es: ${
    enlaces.length > 1  // Ver si hay más de 1 enlace para que haya penúltimo.
    ? lastEnlace.href
    : "No hay más de 1 enlace."
  }.</p>`;
}, 2000);