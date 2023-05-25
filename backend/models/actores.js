import { sequelize } from "../database/database.js";
import { DataTypes } from 'sequelize';

export const actores = sequelize.define("actores", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_actor: {
        type: DataTypes.TEXT,
    },
    Personaje : {
        type: DataTypes.TEXT,
    },

}, {
    timestamps: false
});