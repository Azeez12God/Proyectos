const verificarOrden = (puzzle, ordenCorrecto)=>{
    const mensaje = document.getElementById("mensaje");
    let correcto = true;

    for(let i=0; i<puzzle.length; i++){
        const pieza = puzzle[i].firstChild;

        if(!pieza || pieza.id !== ordenCorrecto[i]){
            correcto = false;
            break;
        }
    }

    correcto
        ? mensaje.classList.remove("esconder")
        : mensaje.classList.add("esconder");
};

const mezclarImagenes = (piezas, contenedorPiezas) => {
    const piezasArray = Array.from(piezas);
    let indicesUsados = [];
    contenedorPiezas.innerHTML = "";

    while (indicesUsados.length < piezasArray.length){
        const indiceAleatorio = Math.floor(Math.random()*piezasArray.length);

        if(!indicesUsados.includes(indiceAleatorio)){
            indicesUsados = [...indicesUsados, indiceAleatorio];
            contenedorPiezas.innerHTML += piezasArray[indiceAleatorio].outerHTML;
        }
    }
}


export{verificarOrden, mezclarImagenes}