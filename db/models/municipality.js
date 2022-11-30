

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Municipality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Region, User}) {
      Municipality.Region = Municipality.belongsTo(Region,{foreignKey:"region_id"});
      Municipality.Users = Municipality.hasMany(User,{foreignKey:"region_id"});
    }
  }
  Municipality.init({
    name: {type:DataTypes.TEXT,
      allowNull:false},

    region_id: {type:DataTypes.INTEGER,
      allowNull:false},
  }, {
    sequelize,
    modelName: 'Municipality',
  });
  return Municipality;
};