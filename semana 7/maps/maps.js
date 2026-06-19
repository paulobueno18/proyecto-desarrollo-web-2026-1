//ejemplo 1
const numeros = [4,6,8];
const dobles = numeros.map(n => n * 2);
console.log(dobles);

//ejemplo 2
const precios = [50,100,150];
const igv = precios.map(p => p * 0.18);
console.log(igv);

//ejemplo 3
let StoreTechProducts = [
    {name: "Iphone", precio: 4500},
    {name: "samsung galaxi S45", precio: 7500},
    {name: "MacBook PRO 2027", precio: 7500},
    {name: "PlayStation 5", precio: 1500},
    {name: "Xbox Series Xa", precio: 850},
    {name: "Canon EO5 R5", precio: 4200},
    {name: "Sony A14 V", precio: 1200},
    {name: "DJI Mavic Air 2", precio: 800},
    {name: "Samsung Qled Q90t", precio: 2350},
    {name: "Bose QuietComfort", precio: 420}
]
let prodIncrementadoPrecio = StoreTechProducts.map((preProd) => {
    let precioFinal = preProd.precio * 1.20;
    return precioFinal;
});
console.log("los precios finales son:", prodIncrementadoPrecio);

//ejemplo 4
const edades = [4,6,8];
const mayores = edades.filter(e => e > 5);
console.log(mayores);