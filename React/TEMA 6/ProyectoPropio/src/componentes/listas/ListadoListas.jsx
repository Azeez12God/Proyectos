import React from 'react'
import Errores from '../estructura/Errores';
import Lista from './Lista.jsx';
import useProveedorListas from '../hooks/useProveedorListas.js';

const ListadoListas = () => {
    const {errorLista, listadoListas} = useProveedorListas();
    return (
        <>
            {listadoListas.length > 0 && Array.isArray(listadoListas) ?
            listadoListas.map((lista)=>{
                return (
                    <Lista datos={lista} key={lista.id}/>              
                )
            })
            : <Errores><h2>No hay listas creadas</h2></Errores>
            }

            {errorLista && <Errores>{errorLista}</Errores>}
        </>
    )
}

export default ListadoListas