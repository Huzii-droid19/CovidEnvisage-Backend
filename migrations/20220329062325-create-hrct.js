"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HRCTs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      inputSample: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      result: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      outputSample: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      accuracy: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HRCTs");
  },
};
