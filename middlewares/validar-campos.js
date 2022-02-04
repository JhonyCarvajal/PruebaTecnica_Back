
//EXPRESS VALIDATOR
const { validationResult } = require('express-validator');



const validarCampos = (req, res, next) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    errors = "";
    next();
}

module.exports = {
    validarCampos
}