let suma = 0;

for (let i = 0; i < 5; i++) {
    let nota = parseInt(prompt(`Ingrese la nota ${i + 1} (un número entre 1 y 10):`));
    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseInt(prompt(`ERROR. Ingrese un número entre 1 y 10:`));
    }
    suma += nota;
}

let promedio = suma / 5;

if (promedio < 5) {
    alert ("Reprobado");
} else if (promedio >= 6 && promedio <= 8) {
    alert ("Aprobado");
} else if (promedio > 8) {
    alert ("Sobresaliente");
}
