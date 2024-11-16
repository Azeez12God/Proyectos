import React from 'react'
import './Discente.css'

const Discente = (props) => {
    const {id,nombre, apellidos, curso, aficiones, comida, borrarAlumno} = props;
    return (
        <>
            {/** Se ejecuta la función borrarAlumno declarada en Matrícula y que se pasa por props al pinchar en un discente. */}
            <div className='discente' onClick={()=>{
                borrarAlumno(id)
            }}>
                <h2>Alumno: {nombre} {apellidos}</h2>
                <h3>Curso: {curso}</h3>
                <h3>Aficiones:</h3>
                <ul>
                    {aficiones.map((aficion,indice)=>{
                        return(
                            <li key={indice}>{aficion}</li>
                        );
                    })}
                </ul>
                <h3>Comida favorita: {comida}</h3>
            </div>
        </>
    )
}

export default Discente