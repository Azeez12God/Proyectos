"use strict";

// Función para añadir el evento click a todas las cabeceras del acordeón.
const addEventosCabeceras = (cabeceras) => {
  // Convertimos a Array las cabeceras para poder hacer map.
  Array.from(cabeceras).map((cabecera) => {
    cabecera.addEventListener("click", () => {
        // El contenido (nextElementSibling de las cabeceras) se mostrará con la clase "Mostrar".
        cabecera.nextElementSibling.classList.toggle("mostrar");
    });
  });
}

export {addEventosCabeceras}