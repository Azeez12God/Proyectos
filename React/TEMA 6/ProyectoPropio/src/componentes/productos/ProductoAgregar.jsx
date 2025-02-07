import React from 'react';
import './ProductoAgregar.css';
import { useNavigate } from 'react-router-dom';

const ProductoAgregar = () => {
    const navegar = useNavigate(null);

    return (
        <div className="producto-agregar-contenedor">
            <div className="producto-agregar-imagen-contenedor" onClick={()=>{navegar('/listas/agregarProductos')}}>
                <img
                    className="producto-agregar-imagen"
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    alt="Añadir producto"
                />
            </div>
            <h3 className="producto-add">Añadir producto</h3>
        </div>
    );
};

export default ProductoAgregar;
