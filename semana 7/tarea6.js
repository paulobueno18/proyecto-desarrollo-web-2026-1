// Ejercicio 6 — Comparador de áreas de triángulos
let b1 = parseFloat(prompt("Base del triángulo 1:"));
let h1 = parseFloat(prompt("Altura del triángulo 1:"));
let b2 = parseFloat(prompt("Base del triángulo 2:"));
let h2 = parseFloat(prompt("Altura del triángulo 2:"));

if (b1 <= 0 || h1 <= 0 || b2 <= 0 || h2 <= 0) {
  console.log("Error: todos los valores deben ser positivos.");
} else {
  const area1 = (b1 * h1) / 2;
  const area2 = (b2 * h2) / 2;

  const clasif = (a) =>
    a < 15  ? "Pequeña"
    : a <= 20 ? "Mediana"
    :           "Grande";

  const mayor = area1 === area2 ? "Ambos tienen la misma área"
               : area1 > area2  ? "El triángulo 1 tiene mayor área"
               :                  "El triángulo 2 tiene mayor área";

  console.log(`
  Triángulo 1: Área = ${area1.toFixed(2)} → ${clasif(area1)}
  Triángulo 2: Área = ${area2.toFixed(2)} → ${clasif(area2)}
  ${mayor}
  Diferencia : ${Math.abs(area1 - area2).toFixed(2)}`);
}