const express = require('express')
const cors = require('cors');
//const db = require('../database/conection');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
       
        //PATHS
        this.paths = {
           /* auth: '/api/auth',*/
            //users: '/api/users',     
        }
        //Conectar a BD-
      //  this.conectarDB();

        //Middlewares --> funcion que siempre se ejecuta
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

        this.listen();

    }
    async conectarDB() {
        try {
            await db.authenticate();
            console.log('Database MySql Online');
        } catch (error) {
            throw new Error(error);
        }
    }

    
    middlewares() {

        //Cors
        this.app.use(cors());

        //lectura y parseo de body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
       
       // this.app.use(this.paths.users, require('../routes/users'))
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }
}

module.exports = Server;