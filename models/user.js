"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.HRCT, {
        foreignKey: "user_id",
        as: "hrct_sample",
        hooks: true,
        onDelete: "CASCADE",
      });

      User.hasMany(models.CXR, {
        foreignKey: "user_id",
        as: "cxr_samples",
        hooks: true,
        onDelete: "CASCADE",
      });

      User.hasMany(models.CovidVitals, {
        foreignKey: "user_id",
        as: "covid_vitals",
        hooks: true,
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
