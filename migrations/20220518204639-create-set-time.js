'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Set_times', {
      set_time_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Set_times');
  }
};