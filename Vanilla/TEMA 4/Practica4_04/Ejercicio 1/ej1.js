"use strict"

window.onload = () => {
    const zonaArrastrable = document.getElementById("zona-con-arrastrar");
    const arrastrables = document.getElementsByClassName("arrastrable");
    for(let i=0;i<arrastrables.length;i++)
        arrastrables[i].setAttribute("draggable",true);

    zonaArrastrable.addEventListener(
        "dragstart",
        (evento) => {
            evento.dataTransfer.setData("id",evento.target.id);
        },
        false
    );

    zonaArrastrable.addEventListener(
        "dragover",
        (evento)=>{
            evento.preventDefault(); // Previene el funcionamiento por defecto
        },
        false
    );

    zonaArrastrable.addEventListener(
        "drop"
    )
}; //Fin del onload 