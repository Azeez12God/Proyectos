const Pelicula = (props) => {
    const{nombre, director, cartelera, children,actores} = props;

    return(
        <>
            <div id="contenedor-contenedor">
                <h1 className="pelicula-titulo">{nombre}</h1>
                <h2 className="pelicula-director">{director}</h2>

                <div className="pelicula-cartelera">
                    <img
                        alt="Carátula de la película"
                        src={cartelera}
                        className="cartelera-caratula"
                    />
                </div>
                <div className="pelicula-resumen">{children}</div>
                <div className="pelicula-elenco">
                    {actores.map((actor, index) => (
                        <div key={index} className="elenco-actor">
                            <img
                                alt={`Imagen de ${actor.nombre}`}
                                src={actor.imagen}
                                className="interprete-imagen"
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