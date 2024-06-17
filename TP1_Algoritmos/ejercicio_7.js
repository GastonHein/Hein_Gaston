var valores = [true, false, 2, "hola", "mundo", 3, "char"];

var textos = valores.filter(item => typeof item === 'string');
var textoMayor = textos.reduce((a, b) => a.length > b.length ? a : b);
document.write("El texto mayor es: ", textoMayor,"</br>");

var textosOrdenados = textos.sort((a, b) => a.length - b.length);
document.write("Textos ordenados de menor a mayor cantidad de letras: ", textosOrdenados,"</br>");

var numeros = valores.filter(item => typeof item === 'number');
var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];

document.write("Suma: ", suma,"</br>");
document.write("Resta: ", resta,"</br>");
document.write("Multiplicación: ", multiplicacion,"</br>");
document.write("División: ", division,"</br>");
