import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const sexualidad = sequelize.define("sexualidad", {
    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    genero : {
        type: DataTypes.TEXT,
        allowNull : false
    }
}, {
    timestamps: false
});