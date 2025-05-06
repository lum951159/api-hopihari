const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controllers");


router.post("/login", usuariosController.login);
router.post("/cadastrar", usuariosController.cadastraUsuario);
router.put("/:id", usuariosController.atualizarUsuario);


module.exports = router;