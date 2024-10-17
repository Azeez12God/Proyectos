"use strict";

let imagenes = [
    "https://i.pinimg.com/236x/93/5e/2d/935e2da3ca66fc5fa3a7b9e434cc81cb.jpg",
    "https://i.pinimg.com/736x/8b/cf/bc/8bcfbc4a2170f953b73e1664cec21b22.jpg",
    "https://i.pinimg.com/736x/d2/cd/df/d2cddf8adb6cec81ad29a0c718fbfb19.jpg",
    "https://i.pinimg.com/236x/02/47/b6/0247b62b23028f3957e68c8ca923e026.jpg"
];

const imgCarrusel = document.getElementById("carrusel");
let indice = 0;
let idIntervalo = setInterval(()=>{
    // Le asignamos el src a la imagen del div.
    imgCarrusel.src = imagenes[indice];
    imgCarrusel.style.opacity = 0;
    indice++;
    // Si llega al índice máximo vuelve al primero.
    if(indice === imagenes.length)
        indice = 0;
    // Al segundo esconde la imagen para simular una transición.
    let idOpacidad = setTimeout(()=>{
        imgCarrusel.style.opacity = 1; 
    },1000)
},2000)