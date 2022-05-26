"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CovidVitals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cough: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      fever: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      oxygen_level: {
        allowNull: false,
        type: Sequelize.ENUM("High", "Low", "Normal"),
      },
      bp_sys: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bp_dia: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pulse_rate: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      result: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("CovidVitals");
  },
};
