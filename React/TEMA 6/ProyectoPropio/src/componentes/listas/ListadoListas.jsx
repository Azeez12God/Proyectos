import React from 'react'
import Errores from '../estructura/Errores';
import Lista from './Lista.jsx';
import { Link } from 'react-router-dom';
import useProveedorListas from '../hooks/useProveedorListas.js';

const ListadoListas = () => {
    const {errorLista, listadoListas} = useProveedorListas();
    return (
        <>
            {listadoListas.length > 0 && Array.isArray(listadoListas) ?
            listadoListas.map((lista)=>{
                return (
                    <Link to={`/listas/${lista.id}`} key={lista.id}>
                        <Lista datos={lista}/>
                    </Link>
                )
            })
            : <Errores><h2>No hay listas creadas</h2></Errores>
            }

            {errorLista && <Errores>{errorLista}</Errores>}
        </>
    )
}

export default ListadoListas