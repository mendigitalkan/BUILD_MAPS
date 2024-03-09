"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWarna = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const gpsLocation_1 = require("../../models/gpsLocation");
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
        const warna = await gpsLocation_1.GpsLocationModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                gpsLocationId: { [sequelize_1.Op.eq]: requestBody.gpsLocationId }
            }
        });
        if (warna === null) {
            const message = 'warna not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.gpsLocationUserId?.toString().length > 0 && {
                gpsLocationUserId: requestBody.gpsLocationUserId
            }),
            ...(requestBody.gpsLocationLatitude?.toString().length > 0 && {
                gpsLocationLatitude: requestBody.gpsLocationLatitude
            }),
            ...(requestBody.gpsLocationLongitude?.toString().length > 0 && {
                gpsLocationLongitude: requestBody.gpsLocationLongitude
            })
        };
        await gpsLocation_1.GpsLocationModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                gpsLocationId: { [sequelize_1.Op.eq]: requestBody.gpsLocationId }
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
