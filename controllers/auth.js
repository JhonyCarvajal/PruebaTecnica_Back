const { response, request } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/user');
const { generarJWT } = require("../helpers/generar-jwt");


const login = async (req, res = response) => {

    try {
        const { email, password } = req.body;

        //VERIFICAR SI EL EMAIL EXISTE
        const usuario = await Usuario.findOne({
            where: {
                email
            }
        });
        if (!usuario) {
            return res.status(400).json({
                errors: [{
                    msg: 'Usuario Incorrecto / Password no son correctos.'
                }]
            });
        }

 

        //VERIFICAR LA CONTRASEÑA
        const validPass = bcryptjs.compareSync(password, usuario.password)

        if (!validPass) {
            return res.status(400).json({
                errors: [{
                    msg: 'Contraseña incorrecta'
                }]
            });
        }


        //Generacion de JWT
        const token= await generarJWT(usuario.id);

        if (usuario) {
            const {
                name,
                email,
                ...resto
            } = usuario;

            const user = { 
                nombre: name,
                Email: email,
                logueado: true
            }
            user.token=token;

            res.status(201).json({
                user,
                msg: `Bienvenido`
            })
        } else {
            res.status(400).json({
                errors: [{
                    msg: `Usuario Incorrecto`
                }]
            });
        }

    } catch (error) {
       
        return res.status(500).json({
            errors: [{
                msg: 'Comunicate con el administrador'
            }]
        });
    }
}

const  Authenticated = async(req, res = response)=>{

    res.status(201).json({
        msg: `Autenticado con token Valido`
    })
        
    console.log('Ingresor')

}

module.exports = {
    login,
    Authenticated

}