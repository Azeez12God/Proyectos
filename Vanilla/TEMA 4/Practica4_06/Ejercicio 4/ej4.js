"use strict"

window.onload = () => {
    // Declaramos los elementos necesarios.
    const provincias = document.getElementById("provincia");
    const poblaciones = document.getElementById("poblacion");
    const botonEnviar = document.getElementById("botonEnviar");

    // Función que mira el valor del select cada vez que cambia y pone las poblaciones correspondientes.
    provincias.addEventListener(
        "change",
        ()=>{
            // Esconde todas las opciones en caso de que haya alguna mostrada de antelación.
            Array.from(poblaciones.getElementsByTagName("option")).map((poblacion)=>{
                poblacion.classList.remove("mostrar");
            });

            // Muestra solamente las que sean de la clase del valor de la provincia.
            const poblaciones_provincia = document.getElementsByClassName(`${provincias.value}`);
            Array.from(poblaciones_provincia).map((poblacion)=>{
                poblacion.classList.add("mostrar");
            });
        },
        false
    );
    
    // Función que valida si se han insertado bien los datos al darle al botón. Si no son correctos informa al usuario.
    const mensaje = document.getElementById("mensaje");
    botonEnviar.addEventListener(
        "click",
        ()=>{
            if(provincias.value !== "no_seleccionado" && poblaciones.value !== "no_seleccionado")
                mensaje.innerHTML = `Datos válidos.`;
            else
                mensaje.innerHTML = `No se ha seleccionado algún dato.`;
        },
        false
    );
};