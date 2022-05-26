'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VaccinationCenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VaccinationCenter.init({
    name: DataTypes.STRING,
    location: DataTypes.GEOMETRY
  }, {
    sequelize,
    modelName: 'VaccinationCenter',
  });
  return VaccinationCenter;
};