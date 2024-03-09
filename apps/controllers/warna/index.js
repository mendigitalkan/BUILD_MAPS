"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnaController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.warnaController = {
    create: create_1.createWarna,
    findAll: find_1.findAllWarna,
    findDetail: find_1.findDetailWarna,
    remove: remove_1.removeWarna,
    update: update_1.updateWarna
};
