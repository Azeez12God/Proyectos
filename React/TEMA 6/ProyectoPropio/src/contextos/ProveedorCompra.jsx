import React, { createContext, useState } from 'react'
import { supabaseConexion } from '../config/supabase';
import { useNavigate } from 'react-router-dom';

const contextoCompra = createContext();
const ProveedorCompra = ({children}) => {

    const errorCompraInicial = "";
    const productosListaInicial = [];

    // Estados de compra.
    const [errorCompra, setErrorCompra] = useState(errorCompraInicial);
    const [productosLista, setProductosLista] = useState(productosListaInicial);

    const navegar = useNavigate(null);

    // Función para gestionar la cantidad de los productos en la lista de la compra.
    const gestionarCantidad = async (sumar, id_producto, id_lista) => {
        try {
            // 1. Obtener el producto de la lista para verificar la cantidad actual.
            const { data, error: selectError } = await supabaseConexion
                .from("Listas_Productos")
                .select("cantidad")
                .eq("id_producto", id_producto)
                .eq("id_lista", id_lista)
                .single();
    
            if (selectError) {
                setErrorCompra(selectError.message);
            }
    
            // 2. Obtener la cantidad actual.
            let nuevaCantidad = data ? data.cantidad : 0;
    
            // 3. Sumar o restar según el valor de `sumar`.
            nuevaCantidad = sumar ? nuevaCantidad + 1 : Math.max(nuevaCantidad - 1, 0);
    
            // 4. Actualizar la cantidad en la base de datos.
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

    // Función para obtener todos los productos de la lista de la compra y asignarlo al estarlo.
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

    // Función para borrar el producto de la lista de la compra.
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
    };

    // Función para actualizar el estado de los productos en la lista, insertando el producto o actualizando la cantidad si ya existe el producto en la lista.
    const insertarProductoLista = (producto) => {
        // Verificar si el producto ya existe en la lista.
        const index = productosLista.findIndex(item => item.Productos.id === producto.id);
    
        if (index !== -1) {
            // Si el producto ya está en la lista, actualizamos la cantidad.
            const listaActualizada = productosLista.map((item, i) => 
                i === index ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setProductosLista(listaActualizada);
        } else {
            // Si el producto no está en la lista, lo agregamos con cantidad 1.
            const nuevoProducto = {
                cantidad: 1,
                Productos: producto
            };
            const listaActualizada = [...productosLista, nuevoProducto];
            setProductosLista(listaActualizada);
        }
    };
    
    // Función que resta la cantidad o quita el producto de la lista de la compra al clicar el -.
    const quitarProductoLista = (producto) => {
        // Verificar si el producto ya existe en la lista
        const index = productosLista.findIndex(item => item.Productos.id === producto.id);
    
        if (index !== -1) {
            const productoActualizado = productosLista[index];
    
            // Si la cantidad es mayor a 1, simplemente restamos 1
            if (productoActualizado.cantidad > 1) {
                const listaActualizada = productosLista.map((item, i) =>
                    i === index ? { ...item, cantidad: item.cantidad - 1 } : item
                );
                setProductosLista(listaActualizada);
            } else {
                // Si la cantidad es 1, lo eliminamos de la lista
                const listaActualizada = productosLista.filter((item, i) => i !== index);
                setProductosLista(listaActualizada);
            }
        }
    };

    // Función para confirmar los cambios de los productos, borrando lo que hay en la base de datos e insertando todo lo de productosLista.
    const confirmarCambios = async (id_lista) => {
        try {
            // Borrar todos los productos de la lista en la base de datos.
            const { error: deleteError } = await supabaseConexion
                .from('Listas_Productos')
                .delete()
                .eq('id_lista', id_lista);
    
            if (deleteError) {
                setErrorCompra(deleteError.message);
                return;
            }
    
            // Insertar los productos actuales de productosLista en la base de datos.
            const productosAInsertar = productosLista.map(item => ({
                id_lista: id_lista,
                id_producto: item.Productos.id,
                cantidad: item.cantidad
            }));
    
            const { error: insertError } = await supabaseConexion
                .from('Listas_Productos')
                .insert(productosAInsertar);
    
            if (insertError) {
                setErrorCompra(insertError.message);
            }

            else{
                navegar(`/listas/${id_lista}`);
            }
        } catch (error) {
            setErrorCompra(error.message);
        }
    };

    const datosProveer = {
        errorCompra,
        gestionarCantidad,
        obtenerProductosLista,
        productosLista,
        borrarProductoLista,
        insertarProductoLista,
        quitarProductoLista,
        confirmarCambios
    };

    return (
        <contextoCompra.Provider value={datosProveer}>
            {children}
        </contextoCompra.Provider>
    )
}

export default ProveedorCompra;
export {contextoCompra}