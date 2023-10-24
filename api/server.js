const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Gunakan adapter Memory
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// Atur router JSON Server untuk menggunakan database dari adapter Memory
server.db = db;

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
