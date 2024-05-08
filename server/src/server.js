const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

// Configuración CORS
server.use(cors({
  origin: 'https://v-games.vercel.app', // Permite solicitudes solo desde este origen
  credentials: true, // Permite incluir cookies en las solicitudes (si las hay)
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'], // Cabeceras permitidas
}));

server.use(router);

module.exports = server;
