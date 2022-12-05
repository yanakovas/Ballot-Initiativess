/* eslint-disable camelcase */

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FederalDistrict extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Region}) {
      FederalDistrict.Regions = FederalDistrict.hasMany(Region,{foreignKey:"federal_district_id"})
    }
  }
  FederalDistrict.init({
    name: {
      type:DataTypes.TEXT,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'FederalDistrict',
  });
  return FederalDistrict;
};