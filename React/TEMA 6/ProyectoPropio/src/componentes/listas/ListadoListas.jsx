import React, { useContext } from 'react'
import {contextoListas} from '../../contextos/ProveedorListas.jsx' 
import Errores from '../estructura/Errores';
import Lista from './Lista.jsx';

const ListadoListas = () => {
    const {errorLista, listadoListas} = useContext(contextoListas);
    return (
        <>
            {listadoListas.length > 0 && Array.isArray(listadoListas) ?
            listadoListas.map((lista)=>{
                return <Lista key={lista.id} datos={lista}/>
            })
            : <Errores><h2>No hay listas creadas</h2></Errores>
            }

            {errorLista && <Errores>{errorLista}</Errores>}
        </>
    )
}

export default ListadoListas