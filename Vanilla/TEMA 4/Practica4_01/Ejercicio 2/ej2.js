    "use strict"

    import { generarColorAleatorio } from "../Biblioteca/biblioteca.js";

    window.onload = ()=>{
        document.addEventListener("click",(evento)=>{
            document.body.style.backgroundColor = generarColorAleatorio();
        }, false);   
    };
