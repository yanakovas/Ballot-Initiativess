
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
     Initiative.User = Initiative.belongsTo(User,{foreignKey:"user_id"})
    }
  }
  Initiative.init({
    user_id: {type:DataTypes.INTEGER,
    allowNull:false},

    title: {type:DataTypes.TEXT,
    allowNull:false},

    text: {type:DataTypes.TEXT,
    allowNull:false},

    votes_for: {type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0},

    votes_against: {type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0},

    voting_deadline: {type:DataTypes.DATE,
    allowNull:false},

    initiative_level: {type:DataTypes.TEXT,
    allowNull:false},

    initiative_is_active: {type:DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:true}
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};