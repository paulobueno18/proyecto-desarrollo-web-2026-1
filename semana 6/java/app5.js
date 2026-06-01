//suma
let preciototal = monitor + cpu + memnoria;
console.log("Precio total:", preciototal);

let adicionales = 50 + 10;
console.log("Adicionales:", adicionales);

//resta
let descuento = 25;
let precioConDescuento = preciototal - descuento;
console.log("Precio con descuento:", precioConDescuento);

//dividir en cuotas
let cuotas = precioConDescuento /2;
console.log("Precio en 2 cuotas:", cuotas);

//multiplicar
let precioFinal = precioConDescuento * 1.21;
console.log("Precio final con IVA:", precioFinal);