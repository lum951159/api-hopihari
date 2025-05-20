const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controllers");


router.post("/", usuariosController.cadastraUsuario);
router.post("/login", usuariosController.login);
router.put("/:id", usuariosController.atualizarUsuario);


module.exports = router;