'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Meet_greets', {
      meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Meet_greets');
  }
};