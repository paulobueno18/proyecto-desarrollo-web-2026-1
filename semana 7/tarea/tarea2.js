// Ejercicio 2 — Analizador avanzado de números
let entrada = prompt("Ingresa un número entero:");
let numero  = parseInt(entrada);

if (isNaN(numero)) {
  console.log("Error: valor inválido, no es un número.");
} else {
  // Signo
  const signo = numero > 0 ? "positivo"
              : numero < 0 ? "negativo"
              : "cero";

  // Paridad
  const paridad = numero % 2 === 0 ? "par" : "impar";

  // Rango (con Math.abs para negativos)
  const abs = Math.abs(numero);
  const rango = abs <= 20 ? "Bajo"
              : abs <= 50 ? "Medio"
              :               "Alto";

  console.log(
    `El número ${numero} es ${signo}, ${paridad} y pertenece al rango ${rango}.`
  );
}