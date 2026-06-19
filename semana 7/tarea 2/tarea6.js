//Sistema de reservas de aerolínea
const pasajeros = [ // es un array de objetos  de pasajeros
  { id:1, nombre:"Juan",   edad:25, gasto:800  },
  { id:2, nombre:"Ana",    edad:17, gasto:300  },
  { id:3, nombre:"Luis",   edad:35, gasto:1200 },
  { id:4, nombre:"María",  edad:40, gasto:950  },
  { id:5, nombre:"Carlos", edad:29, gasto:1500 }
];

// 1. Lista de nombres
const nombres = pasajeros.map(p => p.nombre);
console.log(nombres); // ["Juan","Ana","Luis","María","Carlos"]

// 2. Pasajeros con gasto > S/1000
const gastadoresMil = pasajeros.filter(p => p.gasto > 1000);
console.log(gastadoresMil); // Luis (1200), Carlos (1500)

// 3. Gasto total
const gastoTotal = pasajeros.reduce((acc, p) => acc + p.gasto, 0);
console.log("Gasto total: S/" + gastoTotal); // S/4750

// 4. Buscar pasajero con id = 3
const pasajero3 = pasajeros.find(p => p.id === 3);
console.log(pasajero3); // { id:3, nombre:"Luis", ... }

// 5. ¿Hay algún menor de edad?
const hayMenor = pasajeros.some(p => p.edad < 18);
console.log("¿Hay menor de edad?", hayMenor); // true → Ana tiene 17

// 6. ¿Todos son mayores de edad?
const todosMayores = pasajeros.every(p => p.edad >= 18);
console.log("¿Todos mayores?", todosMayores); // false

// 7. Arrow function de categoría + map()
const categorizar = gasto => {
  if (gasto < 500)  return "Básico";
  if (gasto <= 1000) return "Frecuente";
  return "VIP";
};

const pasajerosCategorizados = pasajeros.map(p => ({
  nombre: p.nombre,
  categoria: categorizar(p.gasto)
}));
console.log(pasajerosCategorizados);
/*
[
  { nombre: "Juan",   categoria: "Frecuente" },
  { nombre: "Ana",    categoria: "Básico"    },
  { nombre: "Luis",   categoria: "VIP"       },
  { nombre: "María",  categoria: "Frecuente" },
  { nombre: "Carlos", categoria: "VIP"       }
]
*/