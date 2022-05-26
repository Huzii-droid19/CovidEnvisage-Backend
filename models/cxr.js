'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CXR extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CXR.belongsTo(models.User,{
        foreignKey:"user_id",
        as:"user"
      })
    }
  }
  CXR.init({
    inputSample: DataTypes.STRING,
    result: DataTypes.BOOLEAN,
    outputSample: DataTypes.STRING,
    accuracy: DataTypes.DECIMAL,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CXR',
  });
  return CXR;
};