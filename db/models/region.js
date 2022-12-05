/* eslint-disable camelcase */


const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({FederalDistrict, Municipality}) {
      Region.FederalDistrict = Region.belongsTo(FederalDistrict,{foreignKey:"federal_district_id"});
      Region.Municipalities = Region.hasMany(Municipality,{foreignKey:"region_id"});
    }
  }
  Region.init({
    name: DataTypes.TEXT,
    federal_district_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Region',
  });
  return Region;
};