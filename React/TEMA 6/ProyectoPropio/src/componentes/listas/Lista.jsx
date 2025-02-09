import React from 'react';
import './Lista.css';
import ListaInfo from '../lista/ListaInfo';
import useProveedorListas from '../hooks/useProveedorListas';
import { useNavigate } from 'react-router-dom';
import ListaBotones from '../lista/ListaBotones';

const Lista = ({ datos }) => {
  const { id, nombre } = datos;
  const {borrarLista} = useProveedorListas();
  const navegar = useNavigate(null);

  const manejarClic = (evento) => {
    if(evento.target.classList.contains("lista-borrar")){
      evento.preventDefault();
      evento.stopPropagation();
      const mensaje = `¿Estás seguro de que quieres borrar ${nombre}?`;
      const borrar = confirm(mensaje);
      if (borrar) {
        borrarLista(id);
      };
    }

    if(evento.target.classList.contains("lista-contenedor")){
      navegar(`/listas/${id}`);
    }
  }

  return (
    <div className="lista-contenedor" id={id} onClick={(e)=>{manejarClic(e)}}>
      <ListaInfo datos={datos}/>
      <ListaBotones/>
    </div>
  );
};

export default Lista;
