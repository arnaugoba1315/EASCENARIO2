console.log("Inicio");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Datos recibidos:", data));

console.log("Fin");