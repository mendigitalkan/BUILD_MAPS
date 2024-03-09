"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpsLocationModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
const user_1 = require("./user");
const moment_1 = __importDefault(require("moment"));
exports.GpsLocationModel = _1.sequelize.define('gps_location', {
    ...zygote_1.ZygoteModel,
    gpsLocationId: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    gpsLocationUserId: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    gpsLocationLatitude: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    gpsLocationLongitude: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'gps_location',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB',
    hooks: {
        beforeCreate: (record, options) => {
            const now = (0, moment_1.default)().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
            record.createdAt = now;
            record.updatedAt = now;
        },
        beforeUpdate: (record, options) => {
            const now = (0, moment_1.default)().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
            record.updatedAt = now;
        }
    }
});
exports.GpsLocationModel.hasOne(user_1.UserModel, {
    sourceKey: 'gpsLocationUserId',
    foreignKey: 'userId'
});
