"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obrasController_1 = __importDefault(require("../controllers/obrasController"));
class ObraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', obrasController_1.default.list);
        this.router.get('/:id', obrasController_1.default.getOne);
        this.router.post('/', obrasController_1.default.create);
        this.router.put('/:id', obrasController_1.default.update);
        this.router.delete('/:id', obrasController_1.default.delete);
    }
}
const obraRoutes = new ObraRoutes();
exports.default = obraRoutes.router;
