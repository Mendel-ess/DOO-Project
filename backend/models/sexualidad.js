import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const sexualidad = sequelize.define("sexualidad", {
    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    genero : {
        type: DataTypes.TEXT,
    }
}, {
    timestamps: false
});