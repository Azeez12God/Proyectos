import React, { useState } from 'react'
import Discentes from './Discentes.jsx';

const Matricula = (props) => {
    const { listaDiscentes } = props;
    const discentesIniciales = [...listaDiscentes.discentes];

    const [discentes,setDiscentes] = useState(discentesIniciales);
    const [ordenacion,setOrdenacion] = useState(true);

    const filtrarAlumnos2DAW = () => {
        const alumnos2DAW = discentesIniciales.filter((discente)=>{
            return discente.curso === "2DAW"
        });

        setDiscentes(alumnos2DAW);
    };

    const filtrarAlumnosPrimerCurso = () => {
        const alumnosPrimerCurso = discentesIniciales.filter((discente)=>{
            return discente.curso.includes("1")
        });

        setDiscentes(alumnosPrimerCurso);
    };

    const filtrarAlumnosDAW = () => {
        const alumnosDAW = discentesIniciales.filter((discente)=>{
            return discente.curso.includes("DAW");
        });

        setDiscentes(alumnosDAW);
    };

    const filtrarAlumnosLectura = () => {
        const alumnosLectura = discentesIniciales.filter((discente)=>{
            return discente.aficiones.includes("lectura");
        });

        setDiscentes(alumnosLectura);
    };

    const ordenarAlumnos = () => {
        if(ordenacion){
            const discentesOrdenadosAscendentes = [...discentes].sort((a,b)=> a.apellidos.localeCompare(b.apellidos));
            setOrdenacion(false);
            setDiscentes(discentesOrdenadosAscendentes);
        }
        else{
            const discentesOrdenadosNoAscendentes = [...discentes].sort((a,b)=> b.apellidos.localeCompare(a.apellidos));
            setOrdenacion(true);
            setDiscentes(discentesOrdenadosNoAscendentes);
        }
    };

    const borrarAlumno = (identificador) => {
        console.log(identificador);
        const discentesActualizados = discentes.filter((discente,indice)=>{
            return parseInt(identificador) !== indice;
        });

        setDiscentes(discentesActualizados);
    };

    return (
        <>
            <div id='contenedor-contenedor'>
                <div className='contenedor-discentes'>
                    <Discentes discentes={discentes}/>
                </div>
                <div className='contenedor-botones'>
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
                        Mosrar alumnos en DAW
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