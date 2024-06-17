let dato, resultado; //Declaración de variables "dato" y "resultado"
val1 = window.prompt("Introduce tu nombre", "..."); //Crea una ventana emergente para ingresar un nombre y lo guarda como "val1"
val2 = window.prompt("Introduce tu apellido", "..."); //Crea una ventana emergente para ingresar un apellido y lo guarda como "val2"
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `; //Genera un string que concatena el nombre y apellido, y la almacena en "resultado"
document.write(resultado); //Imprime por pantalla el contenido de "resultado" en el documento HTML