"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpsLocationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const gpsLocation_1 = require("../../controllers/gpsLocation");
const gpsLocationRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/gps-locations', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await gpsLocation_1.gpsLocationController.findAll(req, res));
    router.get('/detail/:gpsLocationId', async (req, res) => await gpsLocation_1.gpsLocationController.findDetail(req, res));
    router.post('/', async (req, res) => await gpsLocation_1.gpsLocationController.create(req, res));
    router.delete('/', async (req, res) => await gpsLocation_1.gpsLocationController.remove(req, res));
};
exports.gpsLocationRoutes = gpsLocationRoutes;
