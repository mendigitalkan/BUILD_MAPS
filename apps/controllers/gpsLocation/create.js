"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGpsLocation = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const generateId_1 = require("../../utilities/generateId");
const gpsLocation_1 = require("../../models/gpsLocation");
const sequelize_1 = require("sequelize");
const createGpsLocation = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['gpsLocationLatitude', 'gpsLocationLongitude'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const checkLocation = await gpsLocation_1.GpsLocationModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                gpsLocationUserId: { [sequelize_1.Op.eq]: req.body?.user?.userId }
            }
        });
        if (checkLocation === null) {
            requestBody.gpsLocationId = (0, generateId_1.generateUniqueId)();
            requestBody.gpsLocationUserId = req.body?.user?.userId;
            await gpsLocation_1.GpsLocationModel.create(requestBody);
        }
        else {
            checkLocation.gpsLocationLatitude = requestBody.gpsLocationLatitude;
            checkLocation.gpsLocationLongitude = requestBody.gpsLocationLongitude;
            void checkLocation.save();
        }
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
exports.createGpsLocation = createGpsLocation;
