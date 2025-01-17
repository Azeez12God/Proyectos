import React, { createContext, useEffect, useState } from 'react'
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
    const sesionIniciadaInicial = false;

    /** Estados para proveer. */
    const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
    const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
    const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);

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
                setSesionIniciada(true);
            }
        }
        catch(error){
            setErrorUsuario(error.message);
        }
    };

    const cerrarSesion = async () => {
        try{
            await supabaseConexion.auth.signOut();
            setErrorUsuario(errorUsuarioInicial);
            setSesionIniciada(false);
        }
        catch (error){
            setErrorUsuario(error.message);
        }
    };

    const recordarPassword = async () => {
        try{
            if(datosSesion.email){
                const {data, error} = await supabaseConexion.auth.resetPasswordForEmail(datosSesion.email);

                if(error){
                    throw error;
                }
                else{
                    setErrorUsuario("Te llegará un correo para una contraseña nueva.");
                }
            }
            else
                setErrorUsuario("Completa el campo email.")
        }
        catch(error){
            setErrorUsuario(error.message);
        }
    };

    const obtenerUsuario = async () => {
        try {
            const { data, error } = await supabaseConexion.auth.getUser();

            if (error) {
                throw error;
            }

            else{
                setUsuario(data.user);
                setErrorUsuario(errorUsuarioInicial);
            }
        } catch (error) {
            setErrorUsuario(error.message);
        }
    };

    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setDatosSesion({ ...datosSesion, [name]: value });
    };


    useEffect(()=>{
        const suscripcion = supabaseConexion.auth.onAuthStateChange(
            (evento, sesion) => {
                if(sesion){
                    navegar('/');
                    setSesionIniciada(true);
                    obtenerUsuario();
                }
                else{
                    navegar('/login');
                    setSesionIniciada(false);
                }
            }
        );
    }, [])

    const datosProveer = {
        errorUsuario,
        crearCuenta,
        iniciarSesion,
        actualizarDato,
        cerrarSesion,
        sesionIniciada,
        recordarPassword,
        usuario
      };

    return (
        <contextoSesion.Provider value={datosProveer}>
            {children}
        </contextoSesion.Provider>
    )
}

export default ProveedorSesion
export {contextoSesion}