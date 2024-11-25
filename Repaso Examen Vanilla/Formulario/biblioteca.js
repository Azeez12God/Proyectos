const validarInput = (comprobacionInput, input) => {
    let esValido = true;
    if(!comprobacionInput(input.value)){
        input.classList.add("errorInput");
        input.previousElementSibling.classList.add("errorLabel");
    }
    else{
        input.classList.remove("errorInput");
        input.previousElementSibling.classList.remove("errorLabel");
    }
}

const comprobar5CaracteresYRequerido = (texto) => {
    let esValido = true;

    esValido = texto.trim() !== "" && texto.length >= 5;

    return esValido;
}

const comprobar4Digitos = (texto) => {
    let esValido = true;

    esValido = texto.length === 4;

    return esValido;
}

const comprobarLocalizacion = (texto) => {
    let esValido = true;

    esValido = /^ES-\d{3}[A-Z]{2}$/.test(texto);

    return esValido;
}

const valorOpcionPrestado = (opcionesPrestado) => {
    // Comprobamos el radioButton que se ha marcado.
    let prestadoSeleccionado = null;

    for(let i=0;i<opcionesPrestado.length;i++){
        if(opcionesPrestado[i].checked){
             prestadoSeleccionado = opcionesPrestado[i].value;
              break;
        }
    }

    return prestadoSeleccionado;
}

export {validarInput, comprobar5CaracteresYRequerido, comprobar4Digitos, comprobarLocalizacion, valorOpcionPrestado}