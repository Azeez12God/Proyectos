//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
};

// Función para formatear una fecha y devolverla a formato cristiano.
function formatearFecha(fecha) {
    const [year, month, day] = fecha.split("-"); // Divide la fecha en sus partes
    return `${day}/${month}/${year}`; // Reorganiza en formato europeo
}

const obtenerDatos = (url) => {
    return fetch(url)
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        return datos;
    })
    .catch((error)=>{
        setError(error);
    });
}

export {generarUuidAleatorio, formatearFecha, obtenerDatos}