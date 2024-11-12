const JsonServer = require("json-server");
const server = JsonServer.create();
const router = JsonServer.router("almacen.json");
const middlewares = JsonServer.defaults();
const port = process.env.PORT || 10000; //WEB-SERVICE

server.use (middlewares);
server.use (router);
server.use (port);