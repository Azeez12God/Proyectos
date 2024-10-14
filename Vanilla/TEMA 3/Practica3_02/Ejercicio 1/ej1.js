"use strict";

import { bloquearContenidoInapropiado } from "../Biblioteca/biblioteca.js";

// Ponemos que a los 2 segundos haga la función (recogida de la biblioteca).
setTimeout(()=>{
    bloquearContenidoInapropiado();
},2000)