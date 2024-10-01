import "./Interprete.css";

const Interprete = (props) => {
    //JS
    const{children, nombre, foto} = props;
    return(
        // JSX
        <>
            <div className="interprete-contenedor">
                <img 
                    alt="Feo" 
                    src={foto}
                    className="interprete-imagen"
                />
            </div>
            <h1>{nombre}</h1>
            <h3>{children}</h3>
        </>
    );
};

export default Interprete;