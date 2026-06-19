//  // Ejemplo 1 
const estudiante = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería de sistemas",
};
console.log(estudiante.nombre);
console.log(estudiante["edad"]);
console.log(estudiante["carrera"]);

// Ejemplo 2

const producto = {
    nombre: "Laptop",
    precio: 2500
};
console.log(producto);
producto.precio = 3500;

console.log(producto);

// Ejemplo 3

const persona = {
    nombre: "maria",
    saludar() {
        return `Hola soy ${this.nombre}`;
    }
};
console.log(persona.saludar()); 

//* Ejemplo 4
const cuentabancaria = {
    titular: "Zoila Ruiz",
    saldo: 1500,
    depositar(monto) {
        this.saldo += monto;
        return `Depósito exitoso. Nuevo saldo: ${this.saldo}`;
    },
    retirar(monto) {
        if (monto > this.saldo) return `Fondos insuficientes`;
        this.saldo -= monto;
        return `Retiro exitoso. Saldo restante: S/. ${this.saldo}`;
    }
};
console.log(cuentabancaria.depositar(1000));
console.log(cuentabancaria.retirar(500));

//desestructuracion 
const persona1 = {
    nombre: "Ana",
    edad: 22
}
//ANTES
console.log(persona1);
const { nombre, edad } = persona1;
//DESPUES
console.log(`el nombre es: ${nombre}`);
console.log(`la edad es: ${edad} `);

//ejemplo 2 renombrando variables
const usuario = {
    nombre: "dennya",
    correo: "dennya@example.com"
};

const {
    nombre2: nombreUsuario,
    correo: email
}= usuario;
console.log(nombreUsuario)
console.log(email)

//ejemplo 3
const Factura = {
    id: "FAC-204",
    Cliente:{
        datosPersonales: {nombreCliente: "sofia", RUC: "20628541235"},
        direccion: "Av. Universitaria 742"
    },
    items:[{ producto: "laptop", precio: 1200 }]
};

//desestructuracion 
function procesarEnvio({ Cliente: { datosPersonales: { nombreCliente, RUC }, direccion }, items }) {
    return `Preparado envio para ${nombreCliente} a la direccion ${direccion}`;

}
console.log(procesarEnvio(Factura));

//spread operador
const frutas = ["manzana", "platano"];
const criticos = ["limon", "naranja"];

//combinar arreglos sin mezclar los originales
const todasLasFrutas = [...frutas, ...criticos, "fresa"];
console.log(todasLasFrutas);

//ejemplo 2
const estadoOriginal = {
    usuario: "alberto",
    autenticacion: false,
    tema: "oscuro"
};
//cambiamos el estado de forma inmutable
const nuevoEstado = {
    ...estadoOriginal,
    autenticacion: true, //cambiamos el estado
    ultimoAcceso: new Date() //agregamos nueva propiedad
};
console.log("original:", estadoOriginal);
console.log("modificado:", nuevoEstado);

//sincronia 
//callbacks
function consultarBaseDeDatos(id,callback) {
    setTimeout(() => {
        const usuario = { id, nombre: "julio "};
        callback(usuario);
    },3000);
}
consultarBaseDeDatos(5, (datos) => {
    console.log(`Usuario cargado: ${datos.nombre}`);
}); 

//ejemplo 2
function consultarBaseDeDatos1 (query, callback){
    setTimeout(() => {
        if (query === "") {
            callback(new Error("query vacía"), null);
        } else {
            callback(null,{ id:1, resultado: "fila encontrada"});
        }
    }, 1500);
}
consultarBaseDeDatos1("", (err, data) => {
    if (err) {
        console.error(`err de DB: ${err.message}`);
        return;
    }
    console.log("Datos obtenidos:", data);
});

//promesas
//ejemplo 1
const promesa = new Promise((resolve, reject) => {
    resolve("Operación exitosa");
});
promesa.then((resultado) => {
    console.log(resultado);
});

//ejemplo 2
const verificarStock = (cantidadSolicitada) => {
    return new Promise((resolve, reject) => {
        const stockActual = 10;
        if (cantidadSolicitada <= stockActual) {
            resolve("Stock disponible. Procediendo al despacho.");
        } else {
            reject("ERROR: no hay suficiente stock en almacen.");
        }
    });
};
verificarStock(5)
   .then(respuesta => {console.log(respuesta);
    })
    .catch((error) => {console.error(error);
    })
    .finally(() => console.log("operacion de inventario finalizada."));

//async/await
const obtenerClima = () => new Promise((res => setTimeout(() => res("Soleado, 25°C"), 1000)));

async function mostrarDashboard() {
    console.log("Obteniendo clima...");
    const clima = await obtenerClima();
    console.log(`El clima actual es: ${clima}`);
}
mostrarDashboard();

//ejemplo 2
