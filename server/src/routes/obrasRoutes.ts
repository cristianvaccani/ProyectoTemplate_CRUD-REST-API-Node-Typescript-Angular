import { Router } from 'express';

import  obrasController  from '../controllers/obrasController';

class ObraRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', obrasController.list);
        this.router.get('/:id', obrasController.getOne);
        this.router.post('/', obrasController.create);
        this.router.put('/:id', obrasController.update);
        this.router.delete('/:id', obrasController.delete);
    }

}

const obraRoutes = new ObraRoutes();
export default obraRoutes.router;