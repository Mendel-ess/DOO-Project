import sequelize from "../server";
import { DataTypes } from "sequelize";

const reviews = sequelize.define("reviews", {
    reviews_id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        allowNull: false
    },
    comentarios: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating : {
        type: DataTypes.INTEGER,
        allowNull : false
    }
})