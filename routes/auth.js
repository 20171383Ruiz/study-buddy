const express = require('express')
const authService = require('../services/auth');

const router = express.Router()

router.route('/iniciar-sesion')
    .get(authService.getLogIn)
    .post(authService.postLogIn);

router.route('/cerrar-sesion').get(function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;