'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Initiatives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      text: {
        type: Sequelize.TEXT
      },
      votes_count: {
        type: Sequelize.INTEGER
      },
      votes_for: {
        type: Sequelize.INTEGER
      },
      votes_against: {
        type: Sequelize.INTEGER
      },
      voting_deadline: {
        type: Sequelize.DATE
      },
      initiative_level: {
        type: Sequelize.TEXT
      },
      initiative_is_active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Initiatives');
  }
};