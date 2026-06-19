//ejemplo 1
//fetch("https://jsonplaceholder.typicode.com/users")
//.then(response => response.json())
//.then(data =>console.log(data));

//ejemplo 2
//fetch("https://jsonplaceholder.typicode.com/users/1")
//.then(response => response.json())
//.then(usuario =>console.log(usuario));

//ejemplo 3
//fetch("https://jsonplaceholder.typicode.com/users/1")
//.then(response =>response.json())
//.then (usuario =>{
//    document.getElementById("nombre").textContent = usuario.name;
//});

//ejemplo 4 
//fetch("https://jsonplaceholder.typicode.com/posts")
//.then(response => response.json())
//.then(data =>{
 //   console.log(data);
//});


//ejemplo 5
//fetch("https://jsonplaceholder.typicode.com/users")
//.then(response => response.json())
//.then(user => {
//        const lista = document.getElementById("lista");
//        user.forEach(user => {
//            lista.innerHTML += `
//           <li>${user.name}</li>
 //           `;
  //      });
// });

//ejemplo 6

//fetch("https://jsonplaceholder.typicode.com/users")
//.then(response => response.json())
//.then(users => {
 //   let tabla = `
   // <table border="1">
   // <tr>
/*     <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
    </tr>
    `;
    users.forEach(user => {
        tabla += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
    tabla += `</table>`;
    document.body.innerHTML += tabla;
});
*/



