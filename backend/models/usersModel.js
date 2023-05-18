import sequelize from "../server";
import { DataTypes } from "sequelize";

const users = sequelize.define("users", {
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
    }
})