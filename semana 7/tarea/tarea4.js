// Ejercicio 4 — División inteligente de gastos
let consumo     = parseFloat(prompt("Monto total de consumo:"));
let numAmigos   = parseInt(prompt("Cantidad de amigos:"));
let pctPropina  = parseFloat(prompt("Porcentaje de propina :"));

if (numAmigos <= 0) {
  console.log("Error: la cantidad de amigos debe ser mayor a 0.");
} else {
  let propina      = consumo * (pctPropina / 100);
  let totalGeneral = consumo + propina;
  let porPersona   = totalGeneral / numAmigos;

  const nivel = porPersona < 30  ? "Poco"
              : porPersona <= 100 ? "Moderado"
              :                      "Alto";

  console.log(`
  Total consumo  : S/${consumo.toFixed(2)}
  Propina (${pctPropina}%)  : S/${propina.toFixed(2)}
  Total general  : S/${totalGeneral.toFixed(2)}
  Amigos         : ${numAmigos}
  Cada uno paga  : S/${porPersona.toFixed(2)}
  Nivel de gasto : ${nivel}`);
}