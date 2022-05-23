'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stage_Events', {
      stage_events_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stage_Events');
  }
};