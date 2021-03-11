const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosEndpoint = "/api/usuarios";

    // Middlewares: Función que van a ejecutarse cuando se active el servidor
    this.middlewares();

    // Rutas de mi app
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo dle body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    // Con un middleware
    this.app.use(this.usuariosEndpoint, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en ", this.port);
    });
  }
}

module.exports = Server;
