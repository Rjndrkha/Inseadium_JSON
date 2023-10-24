// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
jsonServer.rewriter({
  "/auth/login?username=:username&password=:password":
    "/users?username=:username&password=:password",
  "/auth/user/:id": "/users/:id",
});
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
