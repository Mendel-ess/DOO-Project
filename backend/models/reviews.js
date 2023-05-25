import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { users_review } from "./users_review.js";

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

reviews.hasMany(users_review, {
    foreignKey: 'reviews_id',
    sourceKey: 'id'
});

users_review.belongsTo(reviews, {
    foreignKey: 'reviews_id',
    targerKey: 'id'
})


