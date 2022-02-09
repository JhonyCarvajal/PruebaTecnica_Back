const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { Op, and } = require("sequelize");



const usersPost = async (req, res = response) => {
    console.log('Ingreso')
    try {
        const {
            name,
            email,
            
         } = req.body;

        let { password } = req.body;

        console.log(name,
            email,
            )

        const salt = bcryptjs.genSaltSync(10);
        password = bcryptjs.hashSync(password, salt); //Encriptar contraseña

        const users = await User.findOrCreate({
            where: {
                [Op.or]: [
                    { email },
                ]
            },
            defaults: {
                name,
                email,
                password
            }
        })
        const [user, created] = users;
        if (created) {
            res.status(201).json({
                created,
                user,
                msg: `Usuario Creado Con exito`
            })
        } else {
            res.status(400).json({
                errors: [{
                    created,
                    msg: `Usuario no creado, por favor validar que el email: ${email} no este registrado`
                }]
            });
        }
    } catch (error) {
       
        res.status(500).json({
            errors: [{
                msg: 'Comunicate Con el Administrador'
            }]
        });
    }
}

module.exports = {

    usersPost,
  
}