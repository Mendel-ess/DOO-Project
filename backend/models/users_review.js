import { sequelize } from "../database/database.js";
import { DataTypes } from 'sequelize';

export const users_review = sequelize.define("users_review", {
    id: {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: false
});