//Control de acceso y puertas de seguridad

const alumnosFila = [
  { nombre: "Kevin", matriculado: true,  deudaPendiente: false },
  { nombre: "Sonia", matriculado: true,  deudaPendiente: true  },
  { nombre: "Raúl",  matriculado: false, deudaPendiente: false }
];

// 1. Verificar si TODOS están matriculados
const todosMatriculados = alumnosFila.every(a => a.matriculado);
console.log("¿Todos matriculados?", todosMatriculados);
// false → Raul no está matriculado

// 2. Verificar si ALGUNO tiene deuda pendiente
const hayDeuda = alumnosFila.some(a => a.deudaPendiente);
console.log("¿Hay deuda que bloquee el ingreso?", hayDeuda);
// true → Sonia tiene deuda pendiente