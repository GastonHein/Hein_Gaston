let texto = prompt("Introduce un texto: ");
let vocales = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];


let posicion = -1;
for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        posicion = i + 1;
        break;
    }
}


if (posicion !== -1) {
    document.write(`La primera vocal se encuentra en la posición número ${posicion}.`);
} else {
    document.write("No se encontraron vocales en el texto introducido.");
}
