"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterV1 = void 0;
const controllers_1 = require("../../controllers");
const userRouter_1 = require("./userRouter");
const uploadFileRoute_1 = require("./uploadFileRoute");
const myProfileRouter_1 = require("./myProfileRouter");
const gpsLocationRouter_1 = require("./gpsLocationRouter");
const appRouterV1 = (app) => {
    app.get('/api/v1', async (req, res) => await (0, controllers_1.index)(req, res));
    (0, userRouter_1.userRoutes)(app);
    (0, myProfileRouter_1.myProfileRouter)(app);
    (0, uploadFileRoute_1.uploadFileRoutes)(app);
    (0, gpsLocationRouter_1.gpsLocationRoutes)(app);
};
exports.appRouterV1 = appRouterV1;
