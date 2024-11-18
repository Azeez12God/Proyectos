import React, { useState } from 'react'
import Discentes from './Discentes.jsx'
import './Matricula.css'

const Matricula = (props) => {
    // Importamos la lista de discentes de App.jsx que viene de props.
    const { listaDiscentes } = props;
    const discentesIniciales = [...listaDiscentes.discentes];

    // Declaramos 2 estados que usaremos en el componente, uno para cambiar los discentes que se muestran y otro para comprobar como ordenar los alumnos.
    const [discentes,setDiscentes] = useState(discentesIniciales);
    const [ordenacion,setOrdenacion] = useState(true);

    // Función que filtra en el array a los alumnos que cursan 2DAW.
    const filtrarAlumnos2DAW = () => {
        const alumnos2DAW = discentesIniciales.filter((discente)=>{
            return discente.curso === "2DAW"
        });

        setDiscentes(alumnos2DAW);
    };

    // Función que filtra en el array a los alumnos que están en el primer curso sea cual sea.
    const filtrarAlumnosPrimerCurso = () => {
        const alumnosPrimerCurso = discentesIniciales.filter((discente)=>{
            return discente.curso.includes("1")
        });

        setDiscentes(alumnosPrimerCurso);
    };

    // Función que filtra en el array a los alumnos que están cursando el curso de DAW.
    const filtrarAlumnosDAW = () => {
        const alumnosDAW = discentesIniciales.filter((discente)=>{
            return discente.curso.includes("DAW");
        });

        setDiscentes(alumnosDAW);
    };

    // Función que filtra en el array a los alumnos que tienen como una de sus aficiones lectura.
    const filtrarAlumnosLectura = () => {
        const alumnosLectura = discentesIniciales.filter((discente)=>{
            return discente.aficiones.includes("lectura");
        });

        setDiscentes(alumnosLectura);
    };

    // Función que ordena el array de forma ascendente y descendente.
    const ordenarAlumnos = () => {
        // Si está true el estado se ordena ascendente, si no, descendente.
        if(ordenacion){
            const discentesOrdenadosAscendentes = [...discentes].sort((a,b)=> a.apellidos.localeCompare(b.apellidos)); // He buscado en chatgpt pero entiendo que localeCompare compara alfabéticamente dos string.
            setOrdenacion(false);
            setDiscentes(discentesOrdenadosAscendentes);
        }
        else{
            const discentesOrdenadosDescendentes = [...discentes].sort((a,b)=> b.apellidos.localeCompare(a.apellidos));
            setOrdenacion(true);
            setDiscentes(discentesOrdenadosDescendentes);
        }
    };

    // Función que borra el alumno del array según su id.
    const borrarAlumno = (identificador) => {
        const discentesActualizados = discentes.filter((discente)=>{
            return discente.id !== identificador
        });

        setDiscentes(discentesActualizados);
    };

    return (
        <>
            <div id='contenedor-contenedor'>
                <div className='contenedor-discentes'>
                    <Discentes discentes={discentes} borrarAlumno={borrarAlumno}/>
                </div>
                <div className='contenedor-botones'>
                    {/**Botones que harán las funciones declaradas arriba. */}
                    <button
                        onClick={()=>{
                            filtrarAlumnos2DAW();
                        }}
                    >
                        Mostrar alumnos de 2DAW
                    </button>

                    <button
                        onClick={()=>{
                            filtrarAlumnosPrimerCurso();
                        }}
                    >
                        Mostrar alumnos en primer curso
                    </button>

                    <button
                        onClick={()=>{
                            filtrarAlumnosDAW();
                        }}
                    >
                        Mostrar alumnos en DAW
                    </button>

                    <button
                        onClick={()=>{
                            filtrarAlumnosLectura();
                        }}
                    >
                        Mostrar alumnos que le gustan la lectura
                    </button>

                    <button
                        onClick={()=>{
                            ordenarAlumnos();
                        }}
                    >
                        Ordenar alumnos
                    </button>

                    {/** Para reiniciar simplemente ponemos la lista de discentes inicial en el estado. */}
                    <button
                        onClick={()=>{
                            setDiscentes(discentesIniciales);
                        }}
                    >
                        Reiniciar Listado
                    </button>
                </div>
            </div>
        </>
    )
}

export default Matricula