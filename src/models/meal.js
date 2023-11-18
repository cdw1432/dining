const db = require('../config/db');
const { DataTypes } = require('sequelize');

const meal = db.define(
  'meal',
  {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    what: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    station: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'meal',
    timestamps: false,
  }
);

module.exports = meal;
