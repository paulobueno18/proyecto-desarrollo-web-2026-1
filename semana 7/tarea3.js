// Ejercicio 3 — Facturación con IGV y descuentos
const IGV       = 0.18;
const cliente   = prompt("Nombre del cliente:");
let   precio    = parseFloat(prompt("Precio del producto:"));
let   cantidad  = parseInt(prompt("Cantidad:"));

let subtotal = precio * cantidad;

// Descuento según subtotal
let pctDescuento = subtotal > 1000 ? 0.10
                 : subtotal > 500  ? 0.05
                 :                    0;

let descuento   = subtotal * pctDescuento;
let baseConDesc = subtotal - descuento;
let igv         = baseConDesc * IGV;
let total       = baseConDesc + igv;

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━
  FACTURA — TechStore
━━━━━━━━━━━━━━━━━━━━━━━━━
  Cliente  : ${cliente}
  Subtotal : S/${subtotal.toFixed(2)}
  Descuento: S/${descuento.toFixed(2)} (${pctDescuento*100}%)
  IGV(18%) : S/${igv.toFixed(2)}
  TOTAL    : S/${total.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━━━━━`);