const { DataTypes } = require('sequelize');
const db = require('../database/conection');

const User = db.define('User', {

    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
     email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        isEmail: {
            msg: 'No es un email valido'
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,

    }, updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,

    }
});

module.exports = User;