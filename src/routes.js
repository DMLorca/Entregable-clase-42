const express = require('express');
const passport = require('passport');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.renderLogin);
router.post('/', controller.renderLogin);
router.get('/register', controller.renderRegister);
router.get('/logout', controller.renderLogout);
router.post('/login', passport.authenticate('autenticacion'), controller.renderAutenticado);
router.post('/register', passport.authenticate('registracion'), controller.renderRegistrado);
router.get('/api/randoms/', controller.randomNumbers);
router.get('/info', controller.info);

module.exports = router;