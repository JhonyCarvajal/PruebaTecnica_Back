const User = require('../models/user');
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

const {
    usersPost,
  } = require('../controllers/users');

router.post('/',
  [
  
    check('name', 'El nombre es Obligatorio').not().isEmpty().trim(),
    check('email', 'El correo no es valido').isEmail().trim(),
    check('password').isLength({ min: 8 }).withMessage('La contraseña debe contener minimo 8 carcateres').
      matches(/\d/).withMessage('La contraseña debe contener un número'),
    validarCampos
  ],
  usersPost);


module.exports = router;