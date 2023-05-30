import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const generos = sequelize.define("generos", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
    }
}, {
    timestamps: false
});