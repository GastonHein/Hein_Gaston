
let meses = [ "ENERO", "FEBRERO", "MARZO","ABRIL","MAYO", "JUNIO","JULIO","AGOSTO","SEPTIEMBRE", 
"OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

let numero = parseInt(prompt("Introduce un número del 1 al 12:"));


if (numero >= 1 && numero <= 12) {
  
    document.write("El mes que elegiste es " + meses[numero - 1]);
} else {
    
    document.write("ERROR. Por favor, introduce un número del 1 al 12.");
}

