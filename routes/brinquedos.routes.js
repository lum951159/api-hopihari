const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.midware");
const brinquedosController = require("../controllers/brinquedos.controllers");

router.post(
    '/',
    login.require, // Verifica se o usuário está autenticado
    login.userRequeriment, // Verifica se o usuário é administrador
    brinquedosController.cadastraBrinquedo // Controlador para cadastrar brinquedo
);

router.get(
    '/area/:areaName',
    login.require, brinquedosController.getBrinquedosByAreaName
);

module.exports = router;