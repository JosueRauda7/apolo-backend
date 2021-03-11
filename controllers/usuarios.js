const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { nombre, edad } = req.query;

  if (usuario.nombre) {
    res.json({
      msg: "Es una petición GET a una API - controlador",
      usuario,
    });

    return;
  }
  res.json({
    msg: "Es una petición GET a una API - controlador",
  });
};

const usuariosPost = (req = request, res = response) => {
  // Limpiar y tomar datos específicos. Ignorar lo que no quiero
  const { nombre, edad } = req.body;

  res.json({
    msg: "Es una petición POST a una API - controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req = request, res = response) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).json({
      msgError: "Se requiere un parámetro id en la ruta",
    });
    return;
  }

  res.json({
    msg: "Es una petición PUT a una API - controlador",
    id: id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "Es una petición PATCH a una API - controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Es una petición DELETE a una API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
