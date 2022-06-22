"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CovidVitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CovidVitals.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  CovidVitals.init(
    {
      temperature: DataTypes.STRING,
      heart_rate: DataTypes.DECIMAL,
      respiratory_rate: DataTypes.DECIMAL,
      bp_sys: DataTypes.INTEGER,
      bp_dia: DataTypes.INTEGER,
      spo2: DataTypes.DECIMAL,
      result: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CovidVitals",
    }
  );
  return CovidVitals;
};
