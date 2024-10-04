import Pelicula from "./Pelicula.jsx";
import infoPeliculas from "../objetos/peliculas.json";

const Peliculas = () => {
    const peliculas = [...infoPeliculas.peliculas];

    return(
        <>
            <div>
                {peliculas.length
                ? peliculas.map((pelicula)=>{
                    return(
                        <Pelicula
                        key={pelicula.id}
                        nombre={pelicula.nombre}
                        director={pelicula.director}
                        cartelera={pelicula.cartelera}
                        actores={pelicula.actores}
                        >
                            {pelicula.resumen}
                        </Pelicula>
                    )
                })
                : "No se han encontrado películas."}
            </div>
        </>
    )
}

export default Peliculas;