"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpsLocationController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
exports.gpsLocationController = {
    create: create_1.createGpsLocation,
    findAll: find_1.findAllGpsLocation,
    findDetail: find_1.findDetailGpsLocation,
    remove: remove_1.removeGpsLocation
};
