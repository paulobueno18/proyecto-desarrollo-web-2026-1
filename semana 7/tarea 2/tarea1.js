// Sistema de autenticación defensivo 
// Arrow function que valida credenciales
const validarCredenciales = (usuario, password) => {
  if (usuario !== "" && password.length > 8) {
    localStorage.setItem("usuario_activo", usuario);
    return true;
  }
  return false;
};

// Pruebas
console.log(validarCredenciales("", "12345678x"));   // false → usuario vacío
console.log(validarCredenciales("ana", "1234"));       // false → password ≤ 8 chars
console.log(validarCredenciales("denys", "MiClave2026")); // true → guarda en LS