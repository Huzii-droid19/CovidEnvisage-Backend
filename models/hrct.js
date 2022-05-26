"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HRCT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HRCT.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  HRCT.init(
    {
      inputSample: DataTypes.STRING,
      result: DataTypes.BOOLEAN,
      outputSample: DataTypes.STRING,
      accuracy: DataTypes.DECIMAL,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HRCT",
    }
  );
  return HRCT;
};
