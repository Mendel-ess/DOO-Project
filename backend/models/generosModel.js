import sequelize from "../server";
import { DataTypes } from "sequelize";

const generos = sequelize.define("generos", {
    movie_genre_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})