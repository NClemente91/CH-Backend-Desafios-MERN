const productsRoutes = require("../components/products/products.routes");
const cartRoutes = require("../components/cart/cart.routes");
const ordersRoutes = require("../components/orders/orders.routes");
const chatsRoutes = require("../components/chat/chat.routes");
const usersRoutes = require("../components/users/users.routes");
const errorRoutes = require("../components/error/error.routes");

//MIDDLEWARES
const { authenticateToken } = require("../middleware/validate-auth");

//GENERAL ROUTES
const routes = (server) => {
  server.use("/products", authenticateToken, productsRoutes);
  server.use("/cart", authenticateToken, cartRoutes);
  server.use("/order", authenticateToken, ordersRoutes);
  server.use("/chat", authenticateToken, chatsRoutes);
  server.use("/", usersRoutes);
  server.use("*", errorRoutes);
};

module.exports = routes;
