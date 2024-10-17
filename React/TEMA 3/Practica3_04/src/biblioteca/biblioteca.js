// FUnción para generar número del 1 al max.
function obtenerNumeroAleatorio(max){
    return Math.floor(Math.random()*max) +1;
}

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

export {obtenerNumeroAleatorio, generarColorAleatorio};