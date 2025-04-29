const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post("/login", () => { console.log("Rota Login") });
router.post("/:id", usuariosController.atualizarUsuario);
router.put("/", () => { console.log("Rota Atualizar") });

module.exports = router;