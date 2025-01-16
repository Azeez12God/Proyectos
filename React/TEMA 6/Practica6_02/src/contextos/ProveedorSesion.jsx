import React, { createContext, useState } from 'react'
import {supabaseConexion} from '../config/supabase.js'
import {useNavigate} from 'react-router-dom'

const contextoSesion = createContext();
const ProveedorSesion = ({children}) => {

    const navegar = useNavigate();

    const datosSesionInicial = {
        email: "",
        password: "",
    };

    const usuarioInicial = {};
    const errorUsuarioInicial = "";

    /** Estados para proveer. */
    const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
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
    };

    const iniciarSesion = async () => {
        try{
            const {data, error} = await supabaseConexion.auth.signInWithPassword({
                email: datosSesion.email,
                password: datosSesion.password,
            });
    
            if(error){
                throw error;
            }
            else{
                setErrorUsuario("Inicio de sesión correcto.");
                navegar('/');
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
        iniciarSesion,
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