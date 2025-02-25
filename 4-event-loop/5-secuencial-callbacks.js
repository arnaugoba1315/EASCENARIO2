// Callback Hell

console.log("Inicio");

// Simulación de llamadas a una base de datos con callbacks
function getUser(userId, callback) {
  setTimeout(() => {
    console.log("Usuario obtenido");
    callback({ id: userId, name: "Alice" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Órdenes obtenidas");
    callback([{ orderId: 1, total: 50 }, { orderId: 2, total: 100 }]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    console.log("Detalles de la orden obtenidos");
    callback({ orderId, product: "Laptop", price: 1000 });
  }, 1000);
}

// Llamadas anidadas (Callback Hell)
getUser(1, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].orderId, (orderDetails) => {
      console.log("Detalles finales:", orderDetails);
      console.log("Fin");
    });
  });
});
