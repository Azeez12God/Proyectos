import React from 'react'

const Peliculas = () => {
    const url = "https://swapi.dev/api/films";
    

    return (
        <>
            <li>
                {fetch(url)
                    .then((respuesta)=>{
                        return respuesta.json();
                    })
                    .then((datos)=>{
                        datos.results.length 
                        && datos.results.map((pelicula)=>{

                        })
                    })
                    .catch((error)=>{
                        console.error(error);
                    })}
            </li>
        </>
    )
}

export default Peliculas