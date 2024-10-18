// Función que transforma un texto a "Cani": alternando mayúsculas y minúsculas, las c por las k y con haches al final.
function toCani(texto){
    let resultado = '';
    let mayuscula = true;

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        // Reemplazar 'c' o 'C' por 'k' o 'K'.
        if (letra.toLowerCase() === 'c') {
            letra = mayuscula ? 'K' : 'k';
        }

        // Alternar entre mayúsculas y minúsculas.
        if (mayuscula) {
            resultado += letra.toUpperCase();
        } else {
            resultado += letra.toLowerCase();
        }

        // Cambiar el estado de mayúscula para la próxima letra.
        if (letra !== ' ') {
            mayuscula = !mayuscula;
        }
    }

    // Generar entre 2 y 5 letras H al final.
    let cantidadH = Math.floor(Math.random() * 4) + 2;
    resultado += 'H'.repeat(cantidadH);

    return resultado;
}

// Función que genera un temporizador con el número de minutos y segundos pasados por parámetro.
function temporizador(minutos, segundos) {
    // Si no hay segundo parámetro se trata todo como segundos.
    if (segundos === undefined) {
        segundos = minutos;
        minutos = 0;
    }

    // Convertir a segundos totales.
    let tiempoTotal = minutos * 60 + segundos;
    const mostrarTiempo = setInterval(()=>{
        // Función para mostrar el tiempo formateado.  
        let min = Math.floor(tiempoTotal / 60);
        let seg = tiempoTotal % 60;
        tiempoTotal--;
        console.log(`Quedan ${min} minutos y ${seg} segundos.`);
    }, 1000);

    // Función para terminar el temporizador e informar de que el tiempo ha acabado.
    const terminarTiempo = setTimeout(()=>{
        clearInterval(mostrarTiempo);
        console.log(`¡TIEMPO ACABADO!`);
    }, (tiempoTotal*1000)+999); // Ponemos 999 para evitar que la consola imprima los 0 segundos.
}

// Función que calcula la letra que corresponde al número de DNI pasado por parámetro.
function calculaLetraDNI(numeroDNI){
    let respuesta = '';
    // Array de las letras de DNI según el resto de la división.
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 
                    'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    // Comprueba que el parámetro sea un número.
    if(!isNaN(numeroDNI))
        respuesta = letras[numeroDNI % 23]    
    else
        respuesta = 'Pon un número en el parámetro idiota.';
}

// Función que obtiene y formatea la fecha actual en castellano.
function mostrarFechaActual() {
    const fechaActual = new Date();
    return `Fecha actual: ${fechaActual.toLocaleDateString('es-ES')}`;
}

// Función para contar cuantos DNI hay con la letra pasada por parámetro desde el 48357001 hasta el 48360000 y mostrarlos.
function contarDNIConLetra(letraBuscada) {
    let conteo = 0;
    let resultado = '';

    for (let numeroDNI = 48357001; numeroDNI <= 48360000; numeroDNI++) {
        // Usamos la función de calcularLetra para comprobar si son la misma.
        let letra = calculaLetraDNI(numeroDNI);
        if (letra === letraBuscada) {
            conteo++;
            resultado += `DNI: ${numeroDNI}${letra}\n`;
        }
    }

    return `Se encontraron ${conteo} DNIs con la letra ${letraBuscada}:\n${resultado.trim()}`;
}

// Función que valida si el número pasado por parámetro es primo.
function esPrimo(numero) {
    let esprimo = numero > 1; // Asumimos que es primo si es mayor que 1

    // Verificar si el número es divisible por algún número desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esprimo = false; // No es primo si es divisible por otro número
            break; // Salimos del bucle si encontramos un divisor
        }
    }

    return esprimo; // Devolvemos el resultado final
}

// Función para verificar si un número es palíndromo.
function esPalindromo(numero) {
    let numeroStr = numero.toString();
    return numeroStr === numeroStr.split('').reverse().join('');
}

// Función para saber qué numeros son primos y palíndromos hasta el número pasado por parámetro.
function primosPalindromos(max){
    let resultado = [];
    let respuesta = '';

    // Hace la comprobación si el parámetro es un número.
    if(!isNaN(max)){
        for(let numero=10;numero<=max;numero++){
            if(esPrimo(numero) && esPalindromo(numero))
                resultado = [...resultado, numero]; // Insertamos el número en el array (haciendo una copia de él con el nuevo número).
        }
    
        respuesta = `Números que son primos y palíndromos hasta ${max}:\n${resultado.join(', ')}`;
    }
    // Si no es número insulta al usuario.
    else
        respuesta = `Tienes que poner un número por parámetro idiota.`;

    return respuesta;
}

export {toCani, temporizador, calculaLetraDNI, mostrarFechaActual, contarDNIConLetra, primosPalindromos};