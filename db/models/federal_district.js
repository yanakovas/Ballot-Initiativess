/* eslint-disable camelcase */

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Federal_district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Region}) {
      Federal_district.Regions = Federal_district.hasMany(Region,{foreignKey:"federal_district_id"})
    }
  }
  Federal_district.init({
    name: {
      type:DataTypes.TEXT,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'Federal_district',
  });
  return Federal_district;
};