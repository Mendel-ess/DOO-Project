import sequelize from "../server";
import { DataTypes } from "sequelize";

const genres_map = sequelize.define("genres_map", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    movie_title_id : {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    movie_genres_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})