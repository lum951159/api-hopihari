const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notifications.controllers');
const login = require('../middleware/usuarios.midware'); // Supondo que você tenha esse middleware

router.get('/notifications', login.require, notificationController.getNotificacoes);

module.exports = router;