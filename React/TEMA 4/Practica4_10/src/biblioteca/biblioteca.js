//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };

  const comprobar5CaracteresYRequerido = (texto) => {
    let esValido = true;

    // Si el texto está vacío o tiene menos de 5 caracteres, es inválido.
    esValido = texto.trim() !== "" && texto.length >= 5;

    return esValido;
  }

export {generarUuidAleatorio, comprobar5CaracteresYRequerido}