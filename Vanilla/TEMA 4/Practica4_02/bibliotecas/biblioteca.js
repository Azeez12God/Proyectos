const addEventoAcordeon = (elementos) => {
    // Se transforma elementos en un Array (de este modo puedo usar map).
    Array.from(elementos).map((elemento) => {
      elemento.addEventListener("click", (evento) => {
        const contenido = elemeno.nextElementSibling;
        if(contenido)
            contenido.classList.toggle("mostrar")
      });
    });
  };

  export {addEventoAcordeon}