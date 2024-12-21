import { useContext } from 'react';
import PeliculaProtagonista from './PeliculaProtagonista.jsx';
import { contextoPeliculas } from '../contextos/ProveedorPeliculas.jsx';

const PeliculaProtagonistas = () => {
    const {cargando} = useContext(contextoPeliculas);
    return (
        <>
            <h3>10 protagonistas de la película.</h3>
            {cargando ?
                <p>Cargando protagonistas...</p>
                : <PeliculaProtagonista />
            }
        </>
    )
}

export default PeliculaProtagonistas