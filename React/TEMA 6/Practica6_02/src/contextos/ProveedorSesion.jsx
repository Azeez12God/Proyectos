import React, { createContext, useState } from 'react'
import {supabaseConexion} from '../config/supabase.js'

const contextoSesion = createContext();
const ProveedorSesion = ({children}) => {

    const datosSesionInicial = {
        email: "",
        password: "",
    };

    const usuarioInicial = {};
    const errorUsuarioInicial = "";

    /** Estados para proveer. */
    const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);
    const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);

    const crearCuenta = async () => {
        try{
            const {data, error} = await supabaseConexion.auth.signUp({
                email: datosSesion.email,
                password: datosSesion.password,
            });

            if(error){
                throw error;
            }
            else{
                setErrorUsuario("Recibirás un correo electrónico para la confirmación de la cuenta.");
            }
        }
        catch(error){
            setErrorUsuario(error.message);
        }
    }

    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setDatosSesion({ ...datosSesion, [name]: value });
    };

    const datosProveer = {
        errorUsuario,
        crearCuenta,
        actualizarDato,
      };

    return (
        <contextoSesion.Provider value={datosProveer}>
            {children}
        </contextoSesion.Provider>
    )
}

export default ProveedorSesion
export {contextoSesion}