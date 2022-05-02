/**************************
Toda la aplicacion arranca aca
En el package.json configuro que typescript compile este index.ts a index.js en la carpeta build
Ademas configuro el package.json que node ejecute build/index.js
La clase Server es la principal y se usa para iniciar la aplicacion
**************************/

import express, { Application } from 'express';

//cuando los importo y tira error tengo que instalar los tipos
//npm i @types/morgan @types/cors -D
//el -D significa que solo es una dependencia de desarrollo 
import morgan from 'morgan'; //sirve para ver por consola las peticiones get, post, put, delete
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/obrasRoutes'; 

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

     config(): void {
        this.app.set('port', process.env.PORT || 3000);

       this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
   }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/obras', gamesRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    } 

}

const server = new Server();
server.start();