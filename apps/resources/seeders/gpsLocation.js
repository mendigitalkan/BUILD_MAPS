/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gps_location', [
      {
        gps_location_id: '3qrewqr234234',
        gps_location_user_id: 'sd43r34324weqr',
        gps_location_latitude: '-6.1754',
        gps_location_longitude: '106.8272'
      },
      {
        gps_location_id: '234rewferg43tr4r3t',
        gps_location_user_id: 'sd3wwe2b3f1eca2',
        gps_location_latitude: '-6.1927',
        gps_location_longitude: '106.8226'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gps_location', null, {})
  }
}
