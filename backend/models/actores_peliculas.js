import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const actores_peliculas = sequelize.define("actores_peliculas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    peliculas_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    actores_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});