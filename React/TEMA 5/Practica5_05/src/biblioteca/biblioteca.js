const obtenerDatos = (url) => {
    return fetch(url)
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        return datos;
    })
    .catch((error)=>{
     `Se ha producido un error: ${error.message}`;
    })
}