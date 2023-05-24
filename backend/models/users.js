import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { reviews } from './reviews.js';

export const users = sequelize.define("users", {
    user_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull : false
    },
    FK_reviews: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    timestamps: false
});

users.hasMany(reviews, {
    foreignKey: 'reviews_id',
    sourceKey: 'FK_reviews'
});
reviews.belongsTo(users, {
    foreignKey: 'reviews_id',
    targetKey: 'FK_reviews'
})