import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/obras'});
        res.json({text:'api is / api/games'})
    }

}

export const indexController = new IndexController; 