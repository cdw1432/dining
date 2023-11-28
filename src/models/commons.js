const db = require('../config/db');
const { DataTypes } = require('sequelize');

const dlg = db.define(
    'dlg', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        food: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        station: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        tableName: 'dlg',
        timestamps: false,
    }
);
const carrillo = db.define(
    'carrillo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        food: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        station: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        tableName: 'carrillo',
        timestamps: false,
    }
);
const portola = db.define(
    'portola', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        food: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        station: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        tableName: 'portola',
        timestamps: false,
    }
);
module.exports = {
    dlg,
    carrillo,
    portola,
};