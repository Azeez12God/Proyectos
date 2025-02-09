import React from 'react';
import useProveedorCompra from '../hooks/useProveedorCompra.js';
import './ListaEstadisticas.css';

const ListaEstadisticas = () => {
    const { productosLista } = useProveedorCompra();

    // Umbral de peso (en kg) para sugerir el uso del coche (puedes ajustarlo)
    const umbralPeso = 20;

    // Calculamos el peso total y el precio total, teniendo en cuenta la cantidad de cada producto
    const pesoTotal = productosLista.reduce((total, { cantidad, Productos }) => {
        if (Productos && Productos.peso) {
            return total + (Productos.peso * cantidad);
        }
        return total;
    }, 0);

    const totalEuros = productosLista.reduce((total, { cantidad, Productos }) => {
        if (Productos && Productos.precio) {
            return total + (Productos.precio * cantidad);
        }
        return total;
    }, 0);

    // Verificamos si es necesario el coche para hacer la compra
    const necesitaCoche = pesoTotal > umbralPeso;

    return (
        <div>
            <h2>Estadísticas de la compra</h2>
            <p>Peso total: {pesoTotal} kg</p>
            <p>Total en euros: {totalEuros.toFixed(2)} €</p>
            {necesitaCoche ? (
                <p>¡Parece que el peso total es elevado! Puede ser necesario coger el coche.</p>
            ) : (
                <p>No es necesario coger el coche, el peso es manejable.</p>
            )}
        </div>
    );
}

export default ListaEstadisticas;
