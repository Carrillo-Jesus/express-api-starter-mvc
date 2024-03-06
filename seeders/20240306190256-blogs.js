'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('blogs', [
      {
        title: 'Blog 1',
        content: 'Content 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Blog 2',
        content: 'Content 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Blog 3',
        content: 'Content 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('blogs', null, {});
  }
};
