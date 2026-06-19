//Procesador métrico de telemetría
const lecturasSensores = [   //realice un array de objetos con 4 sensores 
  { id: "S1", zona: "Norte", temperatura: 24.5, estado: "OK"    },
  { id: "S2", zona: "Sur",   temperatura: null,   estado: "ERROR" },
  { id: "S3", zona: "Norte", temperatura: 28.2, estado: "OK"    },
  { id: "S4", zona: "Norte", temperatura: 19.1, estado: "OK"    }
];

// 1. Filtrar zona Norte con estado OK
const sensoresFiltrados = lecturasSensores
  .filter(s => s.zona === "Norte" && s.estado === "OK"); 
//use el filter para quedarme con los sensore de la zona norte y en estado ok

// 2. Calcular promedio con reduce()
const sumTemp = sensoresFiltrados
  .reduce((acc, s) => acc + s.temperatura, 0); //con reduce sume las temperaturas
const promedio = parseFloat((sumTemp / sensoresFiltrados.length).toFixed(2));
//para convertir el resultado a un numero decimal use prsefloat y tofixed


// 3. Crear objeto de reporte
const reporte = {
  zonaEvaluada: "Norte",
  promedio: promedio,
  generadoEn: 2026
};

// 4. Convertir a JSON pretty-print
const reporteJSON = JSON.stringify(reporte, null, 2);
console.log(reporteJSON);
// use json stringify para imprimirlo 

/*
{
  "zonaEvaluada": "Norte",
  "promedio": 23.93,
  "generadoEn": 2026
}
*/