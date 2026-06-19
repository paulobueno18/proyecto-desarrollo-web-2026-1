//Conversor de divisas para e-commerce

const preciosSol = [50, 120, 340, 90, 1500];
const TIPO_CAMBIO = 3.75; // 1 USD = 3.75 PEN

const preciosDolares = preciosSol.map(
  precio => parseFloat((precio / TIPO_CAMBIO).toFixed(2))
);

console.log(preciosDolares);
// [13.33, 32.00, 90.67, 24.00, 400.00]