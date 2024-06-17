class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }
obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: ${this.precio}`;
    }
}
const Vehiculo_1 = new Vehiculo('Citroen', 'C4', 2022);
document.write(Vehiculo_1.obtenerInformacion(),"</br>");

const Automovil_1 = new Automovil('Renault', 'Clio', 2015, 'negro', 65000000);
document.write(Automovil_1.obtenerInformacion());
