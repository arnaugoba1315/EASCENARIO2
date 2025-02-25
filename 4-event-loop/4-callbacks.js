
console.log("Inicio");

// Función asíncrona simulada con setTimeout 
// Como si fuera una consulta a una BD
function getUserData(id, callback) {
  setTimeout(() => {
    console.log(`Datos obtenidos para el usuario ${id}`);
    callback({ id, name: "Alice", age: 25 });
  }, 2000);
}

// Callback que maneja los datos recibidos
function processUserData(user) {
  console.log(`Procesando usuario: ${user.name}, edad: ${user.age}`);
}

// Llamamos a la función asíncrona
getUserData(1, processUserData);

console.log("Fin");
