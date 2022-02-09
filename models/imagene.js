const { DataTypes } = require('sequelize');
const db = require('../database/conection');

const imagene = db.define('imagene', {

    url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,

    }, updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,

    }
});

module.exports = imagene;