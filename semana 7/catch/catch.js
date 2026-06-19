// class HttpError extends Error {
  //constructor(status, statusText) {
    //super(`HTTP ${status}: ${statusText}`);
  //  this.status = status;
 // }
//}
//async function obtenerUsuario(id) {
  //if (typeof id !== 'number' || id <= 0) {
  //  throw new TypeError('ID debe ser un número positivo');
  //}
 // try {
  //  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //  if (!res.ok) throw new HttpError(res.status, res.statusText);
  //  const data = await res.json();
   // return data;
 // } catch (error) {
   // if (error instanceof HttpError) {
   //   console.error(`Error del servidor: ${error.message}`);
  //  } else if (error instanceof SyntaxError) {
  //    console.error('Respuesta con JSON inválido');
    //} else {
     // console.error('Error de red:', error.message);
    //}
    //throw error;
  //}
//}
//(async () => {
  //try {
    //const usuario = await obtenerUsuario(1);
   // console.log('Usuario obtenido:', usuario);
  //} catch (error) {
    //console.log('No se pudo completar la operación:', error.message);
  //}
//})();

// obtenerUsuario(5).then(usuario => console.log(usuario));


//EJEMPLO 5
//const URL = "https://6a305913a7f8866418d5ee34.mockapi.io/producto";

///async function productos() {
  //try {
    //const respuesta = await fetch(URL);
    //if (!respuesta.ok) {
    //  throw new Error(`Error HTTP: ${respuesta.status} - ${respuesta.statusText}`);
    //}

    //try {
      //const productos = await respuesta.json();
      //console.log("Lista de productos obtenida con éxito:", productos);
      //return productos;
    //} catch (errorJson) {
      //console.error("Error: La respuesta del servidor no es un JSON válido.", errorJson);
    //  throw new Error("No se pudo procesar la respuesta del servidor.");
  //  }
//
 // } catch (errorRed) {
 //   console.error("Error de red o de solicitud:", errorRed.message);
 // }
//}
//productos();


async function cargarUsuarios() {
  try {
    const respuesta =
      await fetch('https://jsonplaceholder.typicode.com/users');

    if (!respuesta.ok) {
      throw new Error("Error HTTP");
    }

    const usuarios = await respuesta.json();
    usuarios.forEach(usuario => {
      document.body.innerHTML += `
        <div>
          <h3>${usuario.name}</h3>
          <p>${usuario.email}</p>
        </div>
      `;
    });

  } catch (error) {
    console.error(error);
  }
}

cargarUsuarios();
