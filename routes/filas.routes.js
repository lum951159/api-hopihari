const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.midware");
const filasController = require("../controllers/filas.controllers");

router.post ("/:idRide", login.require, filasController.verificarBrinquedo, filasController.entrarFila);


module.exports = router;