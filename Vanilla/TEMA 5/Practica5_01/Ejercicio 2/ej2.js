"use strict"

const feos = "./feos.json";
const divFeos = document.getElementById("feos");

fetch(feos)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        // Ordenar los datos por first_name
        const datosOrdenados = datos.sort((a, b) => {
            if (a.first_name < b.first_name) return -1;
            if (a.first_name > b.first_name) return 1;
            return 0; // Si son iguales
        });

        datosOrdenados.map((feo)=>{
            divFeos.innerHTML += `<p>${feo.first_name} ${feo.last_name}</p>` ;
        });
        
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));