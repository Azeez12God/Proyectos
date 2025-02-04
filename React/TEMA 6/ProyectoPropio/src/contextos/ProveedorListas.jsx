import React, { createContext } from 'react'

const contextoListas = createContext();
const ProveedorListas = ({children}) => {
    const datosProveer = {};
    return (
        <contextoListas.Provider value={{datosProveer}}>
            {children}
        </contextoListas.Provider>
    )
}

export default ProveedorListas