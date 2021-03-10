const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares: Función que van a ejecutarse cuando se active el servidor
    this.middlewares();

    // Rutas de mi app
    this.routes();
  }

  middlewares() {
    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        msg: "Es una petición GET a una API",
      });
    });
    this.app.put("/api", (req, res) => {
      res.json({
        msg: "Es una petición PUT a una API",
      });
    });
    this.app.post("/api", (req, res) => {
      res.json({
        msg: "Es una petición POST a una API",
      });
    });
    this.app.delete("/api", (req, res) => {
      res.json({
        msg: "Es una petición DELETE a una API",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en ", this.port);
    });
  }
}

module.exports = Server;
