import React, { createContext } from 'react'
import {supabaseConexion} from '../config/supabase.js'

const contextoSesion = createContext();
const ProveedorSesion = ({children}) => {
    const datosProveer = {supabaseConexion};
    console.log(supabaseConexion);
    return (
        <contextoSesion.Provider value={datosProveer}>
            {children}
        </contextoSesion.Provider>
    )
}

export default ProveedorSesion