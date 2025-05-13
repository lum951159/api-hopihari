const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.midware");

router.post("/login", (req, res) => {console.log("Rota da Fila")});

module.exports = router;