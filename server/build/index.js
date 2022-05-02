"use strict";
/**************************
Toda la aplicacion arranca aca
En el package.json configuro que typescript compile este index.ts a index.js en la carpeta build
Ademas configuro el package.json que node ejecute build/index.js
La clase Server es la principal y se usa para iniciar la aplicacion
**************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//cuando los importo y tira error tengo que instalar los tipos
//npm i @types/morgan @types/cors -D
//el -D significa que solo es una dependencia de desarrollo 
const morgan_1 = __importDefault(require("morgan")); //sirve para ver por consola las peticiones get, post, put, delete
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const obrasRoutes_1 = __importDefault(require("./routes/obrasRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/obras', obrasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
