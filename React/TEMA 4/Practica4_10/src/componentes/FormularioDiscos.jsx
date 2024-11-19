import React, { useState } from 'react'

const FormularioDiscos = () => {
    const valoresIniciales = {
        nombre: "",
        grupo: "",
        year: "",
        tipo: "",
        localizacion: "",
        prestado:""
    };

    const [disco, setDisco] = useState(valoresIniciales);

    const actualizarDisco = (evento) => {
        const {name, value} = evento.target;

        setDisco({...disco, [name]:value});
    };

    return (
        <>
            <div id='contenedor-contenedor'>
                <h2>Formulario de discos</h2>
                <form>
                    <label htmlFor="nombre">Nombre del disco:</label>
                    <input type="text" id="nombre" name="nombre" 
                        value={disco.nombre}
                        onChange={(evento)=>{
                            actualizarDisco(evento);
                        }}
                    /> <br/>
                    <label htmlFor="grupo">Grupo de música o intérprete</label>
                    <input type="text" id="grupo" name="grupo" value={disco.grupo}
                        onChange={(evento)=>{
                            actualizarDisco(evento);
                        }}
                    /><br/>
                    <label htmlFor="year">Año de publicación:</label>
                    <input type="number" id="year" name="year" value={disco.year}
                        onChange={(evento)=>{
                            actualizarDisco(evento);
                        }}
                    /><br/>
                    <label htmlFor="tipo">Tipo de música:</label>
                    <select name="tipo" id="tipo" value={disco.tipo}
                        onChange={(evento)=>{
                            actualizarDisco(evento);
                        }}
                    >
                        <option value="rock">Rock</option>
                        <option value="progressive">Progressive</option>
                        <option value="punk">Punk</option>
                        <option value="trash">Trash</option>
                    </select><br/>
                    <label htmlFor="localizacion">Localización:</label>
                    <input type="text" id="localizacion" name="localizacion" value={disco.localizacion}
                        onChange={(evento)=>{
                            actualizarDisco(evento);
                        }}
                    /><br/>
                </form>

                <h2>Valor del estado actual.</h2>
                <pre>{JSON.stringify(disco, null, 2)}</pre>
            </div>
        </>
    )
}

export default FormularioDiscos