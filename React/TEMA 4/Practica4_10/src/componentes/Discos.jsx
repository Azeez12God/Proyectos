import React from 'react'
import Disco from './Disco.jsx';
import { generarUuidAleatorio } from '../biblioteca/biblioteca.js';

const Discos = (props) => {
    const {discos} = props;
    
    return (
        <>
            {discos.length
                ? discos.map((disco,indice)=>{
                    return(
                        <Disco key={generarUuidAleatorio}
                        indice={indice}
                        nombre={disco.nombre}
                        grupo={disco.grupo}
                        year={disco.year}
                        tipo={disco.tipo}
                        localizacion={disco.localizacion}
                        />
                    );
                })
                : `No hay discos insertados.`
            }
        </>
  )
}

export default Discos