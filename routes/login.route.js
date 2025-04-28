const express = require("express");
const router = express.Router();

router.post("/login", () => { console.log("Rota Login") });
router.post("/cadastro", () => { console.log("Rota Cadastro") });
router.put("/atualizar", () => { console.log("Rota Atualizar") });

module.exports = router;