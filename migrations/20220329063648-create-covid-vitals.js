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
      temperature: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      heart_rate: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      respiratory_rate: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      spo2: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      bp_sys: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bp_dia: {
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
