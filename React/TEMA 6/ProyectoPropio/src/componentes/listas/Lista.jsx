import React from 'react';
import './Lista.css';

const Lista = ({ datos }) => {
  const { fecha_creacion, nombre } = datos;

  // Función para formatear la fecha
  const formatearFecha = (fecha) => {
    const fechaObj = new Date(fecha); // Crear un objeto Date
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1; // Los meses comienzan en 0
    const año = fechaObj.getFullYear();
    return `${dia}/${mes}/${año}`;
  };

  return (
    <div className="lista-contenedor">
      <img
        src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
        alt="Carrito de la compra"
        className="lista-carrito"
      />
      <div className="lista-detalles">
        <h2 className="lista-nombre">{nombre}</h2>
        <h3 className="lista-fecha">{formatearFecha(fecha_creacion)}</h3>
      </div>
    </div>
  );
};

export default Lista;
