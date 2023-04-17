// Calculo del 10%

let precio;
let resultado = 0;
let otroPrecio;
function multiplicar(precio, descuento) {
    resultado = precio * descuento
}

do {
    precio = Number(prompt("Ingrese el valor de su producto aquí:"));
    if (Number(precio)) {
        multiplicar(precio, 0.90)
        alert("El valor del producto con el 10% de descuento es:" + " " + resultado)
        otroPrecio = prompt("¿Desea ingresar otro valor? S/N").toUpperCase();
    } else {
        alert("El valor ingresado no es correcto")
    }
} while (otroPrecio == "S")




