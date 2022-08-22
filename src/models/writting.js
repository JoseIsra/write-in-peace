"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Writting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        as: "writtings",
        foreignKey: "user_id",
        type: DataTypes.INTEGER,
      });
    }
  }
  Writting.init(
    {
      content: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
      date: DataTypes.STRING,
      title: DataTypes.TEXT,
      type: DataTypes.INTEGER,
      options: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Writting",
    }
  );
  return Writting;
};
