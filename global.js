// Calculo del 10%

let precio;
let resultado = 0;
let otroPrecio;

do {
    precio = Number(prompt("Ingrese el valor de su producto aquí:"));
    if (Number(precio)) {
        function multiplicar(precio, descuento) {
            resultado = precio * descuento
            alert("El valor del producto con el 10% de descuento es:" + " " + resultado)
        }
    } else {
        alert("El valor ingresado no es correcto")
    }
    multiplicar(precio, 0.90)
    otroPrecio = prompt("¿Desea calcular otro valor? S/N").toUpperCase();
} while (otroPrecio == "S")




