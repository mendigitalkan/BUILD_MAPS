/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('gps_location', {
      ...ZygoteModel,
      gps_location_id: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      gps_location_user_id: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      gps_location_latitude: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      gps_location_longitude: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('gps_location')
  }
}
