const { Router } = require('express')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const { check } = require('express-validator')

const { login, Authenticated } = require('../controllers/auth');



const router = Router();

router.post('/login', [
    check('email', 'El usuario es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);

router.post('/isAuthenticated',[
    validarJWT,
    validarCampos
], Authenticated)

module.exports = router;