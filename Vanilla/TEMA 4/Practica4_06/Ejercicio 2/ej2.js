"use strict"

window.onload = () => {
    const textarea = document.getElementById("textarea");
    const select = document.getElementById("clasesCSS");
    const botonCrear = document.getElementById("crearParrafo");
    const resultado = document.getElementById("resultado");

    botonCrear.addEventListener(
        "click",
        ()=>{
            if(textarea.value.trim() !== "" && select.value !== ""){
                resultado.innerHTML = `<p class="${select.value}">${textarea.value}</p>`;
            }

            else
                resultado.innerHTML = `<p>No has rellenado algo de los dos únicos elementos de la página, ¡marrullero! </p>`;
        },
        false
    );
}; // Fin del onload.