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
export {toCani};