

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Initiative, Municipality}) {
      User.Initiatives = User.hasMany(Initiative,{foreignKey:"user_id"})
      User.Municipality = User.hasOne(Municipality,{foreignKey:"registration_id"})
    }
  }
  User.init({
    password:{
      type:DataTypes.TEXT,
      allowNull:false
    },

    full_name: {
      type:DataTypes.TEXT,
      allowNull:false},

    login: {
      type:DataTypes.TEXT,
      allowNull:false,
      unique:true},

    registration_id: {
      type:DataTypes.INTEGER,
      allowNull:false}

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};