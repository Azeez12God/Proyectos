import React, { useContext, useRef} from 'react';
import { contextoPeliculas } from '../contextos/ProveedorPeliculas.jsx';
import './ProtagonistaInformacion.css'

const ProtagonistaInformacion = () => {
    const { protaSeleccionado, vehiculos, naves } = useContext(contextoPeliculas);
    const pilotaRef = useRef(null);

    const mostrarInformacion = (referencia) => {
        referencia.current.classList.toggle("esconder");
    };

    return (
        <>
            <p><strong>Género:</strong> {protaSeleccionado.value.gender}</p>
            <p><strong>Altura:</strong> {protaSeleccionado.value.height} cm</p>
            <p><strong>Peso:</strong> {protaSeleccionado.value.mass} kg</p>
            <button onClick={()=>{
                mostrarInformacion(pilotaRef);
            }}>Pilota</button>
            <div id='protagonista-pilota' className='esconder' ref={pilotaRef}>
                <div className='protagonista-vehiculos'>
                    <h2>Vehículos</h2>
                    {vehiculos ?
                        vehiculos.map((vehiculo, indice)=>{
                            return(
                                <p key={indice}>{vehiculo.value.name}</p>
                            )
                        })
                        : <p>Este personaje no pilota ningún vehículo.</p>
                    }
                </div>
                <div className='protagonista-naves'>
                    <h2>Naves</h2>
                    {naves ?
                        naves.map((nave, indice)=>{
                            return(
                                <p key={indice}>{nave.value.name}</p>
                            )
                        })
                        : <p>Este personaje no pilota ninguna nave.</p>
                    }
                </div>
            </div>
        </>
    );
};

export default ProtagonistaInformacion;