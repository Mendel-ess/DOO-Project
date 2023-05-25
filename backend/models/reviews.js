import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const reviews = sequelize.define("reviews", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    comentarios: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false
});



