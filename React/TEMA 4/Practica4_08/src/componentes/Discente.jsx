import React from 'react'

const Discente = (props) => {
    const {nombre, apellidos, curso, aficiones, comida, borrarAlumno} = props;
    return (
        <>
            <div className='discente'>
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