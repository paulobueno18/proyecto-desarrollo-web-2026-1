// Ejercicio 5 — Combinador avanzado de cadenas
let a = prompt("Ingresa cadena A:");
let b = prompt("Ingresa cadena B:");

// Comparar tamaños ignorando espacios
const lenA = a.trim().replace(/\s+/g, "").length;
const lenB = b.trim().replace(/\s+/g, "").length;

let corta, larga;
if (lenA <= lenB) {
  corta = a.trim();
  larga = b.trim();
} else {
  corta = b.trim();
  larga = a.trim();
}

const resultado  = `${corta}${larga}${corta}`.toUpperCase();
const totalChars = resultado.length;

console.log(`Resultado      : ${resultado}`);
console.log(`Cadena más larga: ${larga}`);
console.log(`Total caracteres: ${totalChars}`);