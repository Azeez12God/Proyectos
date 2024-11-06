"use strict"

window.onload = () => {
    const zonaArrastrable = document.getElementById("zona-con-arrastrar");
    const arrastrables = document.getElementsByClassName("arrastrable");
    for(let i=0;i<arrastrables.length;i++)
        arrastrables[i].setAttribute("draggable",true);

    zonaArrastrable.addEventListener(
        "dragstart",
        (evento) => {
            console.log(evento.target);
            if (evento.target.tagName === "IMG"){
                evento.dataTransfer.setData("id", evento.target.id);
                console.log(evento.dataTransfer.getData("identificador"));
            }
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
        "drop",
        (evento)=>{
            evento.preventDefault();

            if(evento.target.classList.contains("soltable")){
                console.log(document.getElementById(evento.dataTransfer.getData("id")))
                evento.target.appendChild(
                    document.getElementById(evento.dataTransfer.getData("id"))
                );
            }
        },
        false
    )
}; //Fin del onload 