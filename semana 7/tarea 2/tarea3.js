//Monitor de alertas de servidores

const servidores = [
  { nodo: "BaseDatos-01", online: true,  cargaCPU: 45 },
  { nodo: "WebServer-01", online: false, cargaCPU: 0  },
  { nodo: "AuthAPI-02",   online: true,  cargaCPU: 88 },
  { nodo: "Storage-03",   online: true,  cargaCPU: 12 }
];

// 1. Filtrar servidores encendidos
const servidoresOnline = servidores.filter(s => s.online);
console.log(servidoresOnline);
// BaseDatos-01, AuthAPI-02, Storage-03

// 2. Encontrar el primero con cargaCPU > 80
const alerta = servidoresOnline.find(s => s.cargaCPU > 80);
console.log(alerta);
// { nodo: "AuthAPI-02", online: true, cargaCPU: 88 }

if (alerta) {
  console.log(`⚠ ALERTA: ${alerta.nodo} con ${alerta.cargaCPU}% de CPU`);
}