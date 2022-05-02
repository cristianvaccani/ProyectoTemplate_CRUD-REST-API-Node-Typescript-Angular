"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.json({text: 'API is in /api/obras'});
        res.json({ text: 'api is / api/games' });
    }
}
exports.indexController = new IndexController;
