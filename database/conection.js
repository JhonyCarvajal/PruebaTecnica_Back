const { Sequelize } = require('sequelize');

const db = new Sequelize(
    process.env.MYSQL_BD, 
    process.env.USER, 
    process.env.PASS,
     {
        host: 'localhost',
        dialect: 'mysql',
        port: process.env.PORT_BD
    }
);


module.exports = db;