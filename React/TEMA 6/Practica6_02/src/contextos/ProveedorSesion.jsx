import React, { createContext, useEffect, useState } from 'react'
import {supabaseConexion} from '../config/supabase.js'
import {useNavigate} from 'react-router-dom'

const contextoSesion = createContext();
const ProveedorSesion = ({children}) => {

    const navegar = useNavigate();

    // Estados iniciales.
    const datosSesionInicial = {
        email: "",
        password: "",
    };

    const usuarioInicial = {};
    const errorUsuarioInicial = "";
    const sesionIniciadaInicial = false;

    // Estados para proveer.
    const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
    const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
    const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);

    // Funciones para proveer.

    // Función para crear una cuenta en supabase mediante el correo electrónico y la contraseña.
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

    // Función para iniciar sesión en supabase mediante el correo electrónico y la contraseña.
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

    // Función para cerrar la sesión en supabase.
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

    // Función para recordar la contraseña mediante el correo electrónico.
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

    // Función para obtener el usuario.
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

    // Función para actualizar los datos del usuario.
    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setDatosSesion({ ...datosSesion, [name]: value });
    };


    // Efecto para comprobar si el usuario está autenticado.
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

    // Datos a proveer.
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