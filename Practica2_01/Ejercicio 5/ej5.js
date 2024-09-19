"use strict";

let facturas = [124,48,268];

// Función que calcula y guarda las propinas según la factura, al igual que el precio final.
function calcularPropinas(facturas){
    let propinas = [];
    let cantidadesFinales = [];
    let i=0;

    for(i;i<facturas.length;i++){
        let factura = facturas[i];
        let propina = propinas[i];

        if(factura<50)
            propina = factura * 0.2; // 20 %
        else if(factura>=50 && factura<200)
            propina = factura * 0.15 // 15%
        else if(factura>=200)
            propina = factura * 0.1 // 10 %
        else
            propina = 0;

        cantidadesFinales[i] = factura + propina;

        // Redondeamos los precios a 2 decimales.
        console.log(`El restaurante ${i+1} con factura de ${factura} $ tendrá una propina de ${propina.toFixed(2)} $. El precio final será: ${cantidadesFinales[i].toFixed(2)} $.`);
    }
}

calcularPropinas(facturas);
