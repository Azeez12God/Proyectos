import { useRef } from "react";
import "./Pelicula.css";

const Pelicula = (props) => {
    const{nombre, director, cartelera, children,recaudacion,actores} = props;
    // Usamos dos referencias para apuntar a los distintos elementos.
    const elencoRef = useRef(null);
    const taquillaRef = useRef(null);
    // Declaramos la función que va quitando y poniendo la clase "esconder" para mostrar los elementos.
    const mostrarInformacion = (referencia) => {
        referencia.current.classList.toggle("esconder");
    };

    return(
        <>
            <div id="contenedor-contenedor">
                <h1 className="pelicula-titulo">{nombre}</h1>
                <h2 className="pelicula-director">{director}</h2>

                <div className="pelicula-contenedor">
                    <div className="pelicula-cartelera">
                        <img
                            alt="Carátula de la película"
                            src={cartelera}
                            className="cartelera-caratula"
                        />
                    </div>
                    <div className="pelicula-resumen">{children}</div>
                </div>

                <div className="pelicula-botones">
                    <button
                        onClick={()=>{
                            mostrarInformacion(elencoRef);
                        }}
                    >
                        Elenco
                    </button>
                    <button
                        onClick={()=>{
                            mostrarInformacion(taquillaRef);
                        }}
                    >
                        Taquilla
                    </button>
                    <p className="taquilla-recaudacion esconder" ref={taquillaRef}>{recaudacion} de €</p>
                </div>

                <div className="pelicula-elenco esconder" ref={elencoRef}>
                    {actores.map((actor, indice) => (
                        <div className="elenco-actor" key={indice}>
                            <img
                                alt={`Imagen de ${actor.nombre}`}
                                src={actor.imagen}
                                className="actor-imagen"
                            />
                            <h3>{actor.nombre}</h3>
                            <p>{actor.biografia}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Pelicula;