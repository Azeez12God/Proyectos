const crearTabla = (tabla) => {
    let contenidoTabla = "";
    for(let fila=0; fila<60; fila++){
        contenidoTabla += `<tr>`;
        for(let columna=0; columna<50; columna++){
            contenidoTabla+= `<td></td>`;
        }
        contenidoTabla += `</tr>`;
    }

    tabla.innerHTML += contenidoTabla;
}

export {crearTabla};