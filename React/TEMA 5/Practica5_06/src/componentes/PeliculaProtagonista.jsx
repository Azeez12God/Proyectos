import { generarUuidAleatorio } from '../biblioteca/biblioteca';
import './PeliculaProtagonista.css';
import ProtagonistaInformacion from './ProtagonistaInformacion.jsx';
import { useContext } from 'react';
import { contextoPeliculas } from '../contextos/ProveedorPeliculas.jsx';

const PeliculaProtagonista = () => {
    const {manejarProtaSeleccionado, protagonistas, protaSeleccionado} = useContext(contextoPeliculas);

    

    return (
        <>
            <ul onClick={(evento)=>{
                if(evento.target.tagName === "LI"){
                    manejarProtaSeleccionado(evento.target.id);
                }
            }}>
                {
                    Array.isArray(protagonistas) && protagonistas.length
                    ? protagonistas.map((protagonista, indice)=>{
                        while(indice<10){
                            return(
                                <li key={generarUuidAleatorio()} id={protagonista.value.name}>
                                    {protagonista.value.name}
                                </li>
                            );
                        }
                    })
                    : <p>Esta película no tiene personajes.</p>
                }
            </ul>
            <div>
                {protaSeleccionado
                ? <ProtagonistaInformacion />
                : <p>Clica en un protagonista para ver su informacion</p>
                }
            </div>
        </>
    )
}

export default PeliculaProtagonista