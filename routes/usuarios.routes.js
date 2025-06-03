const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controllers");
const login = require ("../middleware/usuarios.midware");


router.post("/cadastrar", usuariosController.cadastraUsuario);
router.post("/login", usuariosController.login);
router.put("/", login.require , usuariosController.atualizarUsuario);


module.exports = router;