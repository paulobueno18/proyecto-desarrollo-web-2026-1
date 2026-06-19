// Ejercicio 1 — Registro inteligente de usuario con validaciones

const nombre   = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");
let   edad     = parseInt(prompt("Ingresa tu edad:"));

// Validaciones con if-else encadenado
if (!nombre || nombre.trim() === "") {
  alert("El nombre no puede estar vacío");

} else if (!apellido || apellido.trim() === "") {
  alert("El apellido no puede estar vacío");

} else if (isNaN(edad) || edad <= 0) {
  alert("Edad inválida: debe ser un número mayor a 0");

} else {
  // Categoría con operador ternario anidado
  const categoria = edad < 18
    ? "Menor de edad"
    : edad >= 60 ? "Adulto mayor" : "Adulto";

  const mensaje = `Buen día, soy ${nombre} ${apellido}, tengo ${edad} años y pertenezco a la categoría ${categoria}.`;

  console.log(mensaje);
  alert(mensaje);
}