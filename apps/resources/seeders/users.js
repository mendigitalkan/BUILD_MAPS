/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 'sd43r34324weqr',
        user_name: 'admin123',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_role: 'admin'
      },
      {
        user_id: 'sd3wwe2b3f1eca2',
        user_name: 'user123',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_role: 'user'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
