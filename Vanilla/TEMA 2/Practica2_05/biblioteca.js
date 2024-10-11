function toCani(texto){
    let resultado = '';
    let mayuscula = true;

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        // Reemplazar 'c' o 'C' por 'k' o 'K'
        if (letra.toLowerCase() === 'c') {
            letra = mayuscula ? 'K' : 'k';
        }

        // Alternar entre mayúsculas y minúsculas
        if (mayuscula) {
            resultado += letra.toUpperCase();
        } else {
            resultado += letra.toLowerCase();
        }

        // Cambiar el estado de mayúscula para la próxima letra
        if (letra !== ' ') {
            mayuscula = !mayuscula;
        }
    }

    // Generar entre 2 y 5 letras H al final
    let cantidadH = Math.floor(Math.random() * 4) + 2;
    resultado += 'H'.repeat(cantidadH);

    return resultado;
}

function temporizador(minutos, segundos) {
    // Validación básica de los parámetros
    if (segundos === undefined) {
        segundos = minutos;
        minutos = 0;
    }

    // Convertir a segundos totales
    let tiempoTotal = minutos * 60 + segundos;
    const mostrarTiempo = setInterval(()=>{
        // Función para mostrar el tiempo formateado  
        let min = Math.floor(tiempoTotal / 60);
        let seg = tiempoTotal % 60;
        tiempoTotal--;
        console.log(`Quedan ${min} minutos y ${seg} segundos.`);
    }, 1000);

    const terminarTiempo = setTimeout(()=>{
        clearInterval(mostrarTiempo);
        console.log(`¡TIEMPO ACABADO!`);
    }, (tiempoTotal*1000)+999);
}

export {toCani, temporizador};