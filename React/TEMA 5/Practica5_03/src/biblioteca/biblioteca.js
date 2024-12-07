//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
};

// Función para formatear una fecha y devolverla a formato cristiano.
function formatearFecha(fecha) {
    const [year, month, day] = fecha.split("-"); // Divide la fecha en sus partes
    return `${day}/${month}/${year}`; // Reorganiza en formato europeo
}

export {generarUuidAleatorio, formatearFecha}