const { Router } = require('express');
const { check } = require('express-validator');

const {
    imagesGet,
    imagePost
  } = require('../controllers/imagen.js');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();


router.get('/AllImages',imagesGet )

router.post('/images',[
    validarCampos
],imagePost
)


module.exports = router;