"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const warna_1 = require("../../controllers/warna");
const warnaRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/warna', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await warna_1.warnaController.findAll(req, res));
    router.get('/detail/:warnaKode', middlewares_1.middleware.useAuthorization, async (req, res) => await warna_1.warnaController.findDetail(req, res));
    router.post('/', async (req, res) => await warna_1.warnaController.create(req, res));
    router.patch('/', async (req, res) => await warna_1.warnaController.update(req, res));
    router.delete('/', async (req, res) => await warna_1.warnaController.remove(req, res));
};
exports.warnaRoutes = warnaRoutes;
