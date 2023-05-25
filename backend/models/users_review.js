import { sequelize } from "../database/database.js";
import { DataTypes } from 'sequelize';
import { users } from "./users.js";
import { reviews } from "./reviews.js";

export const users_review = sequelize.define("users_review", {
    id: {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: false
});

users.belongsToMany(reviews, {through: 'users_review'});
reviews.belongsToMany(users, {through: 'users_review'});