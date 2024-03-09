"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWarna = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const warna_1 = require("../../models/warna");
const updateWarna = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['warnaKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const warna = await warna_1.WarnaModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                warnaKode: { [sequelize_1.Op.eq]: requestBody.warnaKode }
            }
        });
        if (warna === null) {
            const message = 'warna not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.warnaKodeBahan?.toString().length > 0 && {
                warnaKodeBahan: requestBody.warnaKodeBahan
            }),
            ...(requestBody.warnaNama?.toString().length > 0 && {
                warnaNama: requestBody.warnaNama
            }),
            ...(requestBody.warnaHarga?.toString().length > 0 && {
                warnaHarga: requestBody.warnaHarga
            }),
            ...(requestBody.warnaNilai1?.toString().length > 0 && {
                warnaNilai1: requestBody.warnaNilai1
            }),
            ...(requestBody.warnaNilai2?.toString().length > 0 && {
                warnaNilai2: requestBody.warnaNilai2
            }),
            ...(requestBody.warnaKet1?.toString().length > 0 && {
                warnaKet1: requestBody.warnaKet1
            }),
            ...(requestBody.warnaKet2?.toString().length > 0 && {
                warnaKet2: requestBody.warnaKet2
            })
        };
        await warna_1.WarnaModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                warnaKode: { [sequelize_1.Op.eq]: requestBody.warnaKode }
            }
        });
        const response = response_1.ResponseData.default;
        const result = { message: 'success' };
        response.data = result;
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.updateWarna = updateWarna;
