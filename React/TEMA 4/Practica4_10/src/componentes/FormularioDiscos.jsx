import React, { useRef, useState } from 'react'
import Discos from './Discos.jsx';
import Errores from './Errores.jsx';
import './FormularioDiscos.css';
import { comprobar5CaracteresYRequerido } from '../biblioteca/biblioteca.js';

const FormularioDiscos = () => {
    const valoresIniciales = {
        nombre: "",
        grupo: "",
        year: "",
        tipo: "",
        localizacion: "",
    };

    const erroresIniciales = [];

    const [disco, setDisco] = useState(valoresIniciales);
    const [listaDiscos, setListaDiscos] = useState([]);
    const [errores, setErrores] = useState(erroresIniciales);
    const discoRef = useRef(null);
    const formRef = useRef(null);
    const erroresRef = useRef(null);

    const actualizarDisco = (evento) => {
        const {name, value} = evento.target;

        setDisco({...disco, [name]:value});
    };

    const mostrarDiscos = (referencia) => {
        referencia.current.classList.toggle("esconder");
    };

    // Función que valida el valor de un input.
    const validarDato = (elemento) => {
        const { name, value } = elemento;
        let erroresElemento = [];

        // Campo nombre.
        if (name === "nombre") {
        // Se comprueba si tiene algo escrito.
        if (!comprobar5CaracteresYRequerido(value)) {
            erroresElemento = [
            ...erroresElemento,
            `El campo ${name} debe tener un valor y tiene que tener mínimo 5 caracteres.`,
            ];
        }
        }

        // Campo grupo/interprete.
        if (name === "grupo") {
        // Se comprueba si tiene algo escrito.
        if (!comprobar5CaracteresYRequerido(value))
            erroresElemento = [
            ...erroresElemento,
            `El campo ${name} debe tener un valor y tiene que tener mínimo 5 caracteres.`,
            ];
        }

        // Campo tipo
        if(name === "tipo"){
            if(value === "no_seleccionado")
                erroresElemento = [...erroresElemento, `El tipo de música debe haber sido seleccionado. `];
        }

        // Campo año.
        if (name === "year") {
        // Se comprueba si tiene 4 dígitos.
        if (value.toString().length !== 4)
            erroresElemento = [
            ...erroresElemento,
            `El año tiene que tener 4 dígitos.`,
            ];
        }

        // Campo localización.
        if(name === "localizacion"){
            if(!/^ES-\d{3}[A-Z]{2}$/.test(value))
                erroresElemento = [...erroresElemento, `El campo ${name} tiene que tener el formato ES-001AA, siendo 001 el número de estantería y AA el número de balda.`];
        }


        // Se devuelve el listado de errores (o ninguno).
        return erroresElemento;
    };

    const validarFormulario = (referencia) => {
        // El elemento form es el parentNode del evento y tiene sus elementos.
        const formulario = referencia.current;
        let erroresListado = [];

        for(let i=0;i<formulario.elements.length;i++){
            let erroresInputs = validarDato(formulario.elements[i]);
            if(erroresInputs.length !== 0){
                formulario.elements[i].previousElementSibling.classList.add("errorLabel");
                formulario.elements[i].classList.add("errorInput");
            }
            else{
                formulario.elements[i].previousElementSibling.classList.remove("errorLabel");
                formulario.elements[i].classList.remove("errorInput");
            }

            erroresListado = [...erroresListado, ...erroresInputs];
        }

        setErrores(erroresListado);

        if(erroresListado.length===0){
            setListaDiscos([...listaDiscos,disco]);
            setDisco(valoresIniciales);
        } 
    };

    return (
        <>
            <div id='contenedor-contenedor'>
                <h2>Formulario de discos</h2>
                <form ref={formRef}>
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
                        <option value="no_seleccionado">No seleccionado</option>
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

                <button onClick={()=>{
                    validarFormulario(formRef);
                }}>
                    Guardar disco
                </button>

                <button onClick={()=>{
                    mostrarDiscos(discoRef);
                }}>
                    Mostrar discos
                </button>

                <div>
                    <h2>Control de errores</h2>
                    <Errores erroresMostrar={errores}/>
                </div>

                <div id='discos-contenedor' className='esconder' ref={discoRef}>
                    <Discos discos={listaDiscos}/>
                </div>
            </div>
        </>
    )
}

export default FormularioDiscos