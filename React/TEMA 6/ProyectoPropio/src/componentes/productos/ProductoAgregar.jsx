import React from 'react';
import './ProductoAgregar.css';

const ProductoAgregar = () => {
    return (
        <div className="producto-agregar-contenedor">
            <div className="producto-agregar-imagen-contenedor">
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
