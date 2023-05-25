import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const generos = sequelize.define("generos", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
});