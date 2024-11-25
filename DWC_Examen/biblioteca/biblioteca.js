const creaLibro = (id,titulo, autor, genero) => {
    let libro = {
        id,
        titulo,
        autor,
        genero
    };

    return libro;
};

const compruebaTexto = (texto) => {
    let esValido = true;

    texto.trim() !== "" && texto.length >= 3 ? esValido : !esValido;

    return esValido;
};

const compruebaLibro = (titulo, autor, genero) => {
    let esValido = true;

    esValido = compruebaTexto(titulo) && compruebaTexto(autor) && genero !== "";

    return esValido;
};

const muestraLibros = (libros) => {
    const tablaLibros = document.getElementById("tabla-libros");
    const tabla = tablaLibros.lastElementChild;
    tabla.innerHTML = "";
    libros.map((libro, indice)=>{
        tabla.innerHTML += `
            <tr id=${indice}>
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.genero}</td>
                <td><button>Eliminar</button></td>
            </tr>
        `;
    });
};

const filtrarLibros = (opcionFiltrado, listaLibros) => {
    if(opcionFiltrado==="Ficción"){
        let librosFiccion = listaLibros.filter((libro)=>{
           return libro.genero === "Ficción";
        });
        muestraLibros(librosFiccion);
      }

      else if(opcionFiltrado==="Ensayo"){
       let librosEnsayo = listaLibros.filter((libro)=>{
           return libro.genero === "Ensayo";
        });
        muestraLibros(librosEnsayo);
      }

      else if(opcionFiltrado==="Fantasía"){
       let librosFantasia = listaLibros.filter((libro)=>{
           return libro.genero === "Fantasía";
        });
        muestraLibros(librosFantasia);
      }

      else if(opcionFiltrado==="Misterio"){
       let librosMisterio = listaLibros.filter((libro)=>{
           return libro.genero === "Misterio";
        });
        muestraLibros(librosMisterio);
      }

      else{
       muestraLibros(listaLibros);
      }
}

const muestraEstadisticas = (libros) => {
    const numeroLibros = document.getElementById("total-libros");
    const generoLibros = document.getElementById("generos-libros");

    const totalFiccion = libros.filter((libro)=>libro.genero === "Ficción");
    const totalEnsayo = libros.filter((libro)=> libro.genero === "Ensayo");
    const totalFantasia = libros.filter((libro)=> libro.genero === "Fantasía");
    const totalMisterio = libros.filter((libro)=> libro.genero === "Misterio");
    
    numeroLibros.innerHTML = `Número de libros: ${libros.length}`;
    generoLibros.innerHTML = `<p id="generos-libros">Distribución de géneros:</p>
        <table>
        <tr>
            <td>Ficción</td>
            <td>${totalFiccion.length}</td>
        </tr>
        <tr>
            <td>Ensayo</td>
            <td>${totalEnsayo.length}</td>
        </tr>
        <tr>
            <td>Fantasía</td>
            <td>${totalFantasia.length}</td>
        </tr>
        <tr>
            <td>Misterio</td>
            <td>${totalMisterio.length}</td>
        </tr>
        </table>
    `;
}

const validaLibro = (libros, titulo, autor) => {
    let esValido = true;
    libros.forEach((libro)=>{
        if(libro.titulo===titulo && libro.autor===autor){
            esValido = false;
        }
    });

    return esValido;
};


export {creaLibro, compruebaTexto, compruebaLibro, muestraLibros, filtrarLibros, muestraEstadisticas, validaLibro}