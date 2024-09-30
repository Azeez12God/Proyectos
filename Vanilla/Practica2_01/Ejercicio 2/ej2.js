"use strict";

// Guardo los puntos de los equipos.
let equipoJuan = [89,120,103];
let equipoMiguel = [116,94,123];
let equipoMaria = [97,134,105];

// Función para calcular la puntuación media de un equipo.
function calcularPuntuacionMediaEquipos(equipo=[1,1,1]){
    let puntuacionMedia = 0;
    for(let i=0; i<equipo.length;i++){
        puntuacionMedia += equipo[i];
    }

    return puntuacionMedia / equipo.length;
}

// Función que compara las puntuaciones de los equipos y muestra el ganador.
function mostrarGanador(equipoJuan, equipoMiguel, equipoMaria, funcionPuntuacion){
    let puntuacionJuan = funcionPuntuacion(equipoJuan);
    let puntuacionMiguel = funcionPuntuacion(equipoMiguel);
    let puntuacionMaria = funcionPuntuacion(equipoMaria);

    if(puntuacionJuan>puntuacionJuan && puntuacionJuan>puntuacionMaria){
        console.log(`El ganador es el equipo de Juan con ${puntuacionJuan} puntos.`);
    }
    else if(puntuacionMiguel>puntuacionJuan && puntuacionMiguel>puntuacionMaria){
        console.log(`El ganador es el equipo de Miguel con ${puntuacionMiguel} puntos.`);
    }
    else if(puntuacionMaria>puntuacionJuan && puntuacionMaria>puntuacionMiguel){
        console.log(`El ganador es el equipo de María con ${puntuacionMaria} puntos.`);
    }
    // Considero que al no haber un equipo con más puntos que los otros no hay ganador.
    else{
        console.log(`Ha habido un empate entre algún o algunos equipos. No hay ganador.`);
    }
}

mostrarGanador(equipoJuan, equipoMiguel, equipoMaria, calcularPuntuacionMediaEquipos);