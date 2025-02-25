console.log("Inicio");

async function fetchPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Datos recibidos:", data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

fetchPost();

console.log("Fin");
