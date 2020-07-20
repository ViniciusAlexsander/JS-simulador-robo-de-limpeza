const express = require("express");
const routes = require("./routes");

const server = express();

server.use(express.json());
server.use(routes);

let port = process.env || 3333;
server.listen(port,() => {
  console.log(`Server is running port = 3333`)
})