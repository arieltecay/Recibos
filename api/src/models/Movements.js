const bcrypt = require("bcryptjs");
const { DataTypes } = require("sequelize");

//Modelo de usuario
module.exports = (sequelize) => {
  const movements = sequelize.define(
    "movements",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observaciones: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      debe: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      haber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sucursal: {
        type: DataTypes.STRING,
      },
    },
  );
  return movements;
};