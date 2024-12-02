// FUnción para mostrar las películas en el ul del html.
const mostrarListaPeliculas = (peliculas, listaPeliculas) => {
    let cadena = "";
    peliculas.length
    ? peliculas.map((pelicula)=>{
        cadena += `<li>Episodio ${pelicula.episode_id}: ${pelicula.title}</li>`
    })
    : (cadena = `<li>No se han encontrado películas.</li>`);
    listaPeliculas.innerHTML += cadena;
};

// Función para formatear una fecha y devolverla a formato cristiano.
function formatearFecha(fecha) {
    const [year, month, day] = fecha.split("-"); // Divide la fecha en sus partes
    return `${day}/${month}/${year}`; // Reorganiza en formato europeo
}

// Función para mostrar la información de la película en sus respectivos div.
const mostrarInformacion = (peliculas, infoTitulo, infoDatos, evento) => {
    peliculas.length
    ? peliculas.map((pelicula)=>{
            if(evento.target.textContent.includes(pelicula.title)){
                                infoTitulo.innerHTML = `<h3>${pelicula.title}</h3>`;
                                infoDatos.innerHTML = `
                                    <p><strong>Sinopsis:</strong> ${pelicula.opening_crawl}</p>
                                    <p><strong>Director:</strong> ${pelicula.director}</p>
                                    <p><strong>Productor:</strong> ${pelicula.producer}</p>
                                    <p><strong>Fecha de lanzamiento:</strong> ${formatearFecha(
                                        pelicula.release_date
                                    )}</p>
                                `;
                            }
                        })
                        : infoTitulo.innerHTML = `No se ha encontrado información.`;
};

export {mostrarListaPeliculas, formatearFecha, mostrarInformacion}