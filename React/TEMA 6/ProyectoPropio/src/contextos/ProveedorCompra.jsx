import React, { createContext, useState } from 'react'
import { supabaseConexion } from '../config/supabase';
import useProveedorListas from '../componentes/hooks/useProveedorListas.js';

const contextoCompra = createContext();
const ProveedorCompra = ({children}) => {

    const errorCompraInicial = "";
    const productosListaInicial = [];

    const [errorCompra, setErrorCompra] = useState(errorCompraInicial);
    const [productosLista, setProductosLista] = useState(productosListaInicial);

    const gestionarCantidad = async (sumar, id_producto, id_lista) => {
        try {
            // 1. Obtener el producto de la lista para verificar la cantidad actual
            const { data, error: selectError } = await supabaseConexion
                .from("Listas_Productos")
                .select("cantidad")
                .eq("id_producto", id_producto)
                .eq("id_lista", id_lista)
                .single();
    
            if (selectError) {
                setErrorCompra(selectError.message);
            }
    
            // 2. Obtener la cantidad actual
            let nuevaCantidad = data ? data.cantidad : 0;
    
            // 3. Sumar o restar según el valor de `sumar`
            nuevaCantidad = sumar ? nuevaCantidad + 1 : Math.max(nuevaCantidad - 1, 0);
    
            // 4. Actualizar la cantidad en la base de datos
            const { error } = await supabaseConexion
                .from("Listas_Productos")
                .update({ cantidad: nuevaCantidad })  // Actualizamos la cantidad
                .eq("id_producto", id_producto)  // Filtramos por id_producto
                .eq("id_lista", id_lista);  // Filtramos por id_lista
    
            if (error) {
                setErrorCompra(error.message);
            }
        } catch (error) {
            setErrorCompra(error.message);
        }
    };

    const obtenerProductosLista = async (id) => {
        try{
            const {data, error} = await supabaseConexion.from('Listas_Productos').select('cantidad, Productos(*)').eq('id_lista', id);

            if(error){
                setErrorCompra(error.message);
            }
            else{
                setProductosLista(data);
            }
        }
        catch(error){
            setErrorCompra(error.message);
        }
    };

    const borrarProductoLista = async (id_producto, id_lista) => {
        try{
            const {error, count} = await supabaseConexion
            .from('Listas_Productos')
            .delete()
            .eq("id_producto", id_producto)
            .eq("id_lista", id_lista);

            if(error){ setErrorCompra(error.message);}
            else if(count===0){ setErrorCompra("No se ha podido borrar el producto");}
            else{obtenerProductosLista(id_lista);}
        }
        catch(error){
            setErrorCompra(error.message);
        }
    }

    const datosProveer = {
        errorCompra,
        gestionarCantidad,
        obtenerProductosLista,
        productosLista,
        borrarProductoLista
    };

    return (
        <contextoCompra.Provider value={datosProveer}>
            {children}
        </contextoCompra.Provider>
    )
}

export default ProveedorCompra;
export {contextoCompra}