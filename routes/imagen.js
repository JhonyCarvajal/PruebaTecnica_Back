const { Router } = require('express');
const { check } = require('express-validator');
const multer  = require('multer')
const sharp = require('sharp');

const {
    imagesGet,
    imagePost
  } = require('../controllers/imagen.js');

const storageMulter = multer.memoryStorage() 
const upload = multer({ storage: storageMulter })
  
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt.js');


const router = Router();


router.get('/AllImages',imagesGet )

router.post('/images' ,[
  validarJWT,
  upload.single('imagen'),
    validarCampos
],imagePost
)


module.exports = router;