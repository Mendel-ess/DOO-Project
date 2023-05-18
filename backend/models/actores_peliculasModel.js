import sequelize from "../server";
import { DataTypes } from "sequelize";

const actores_peliculas = sequelize.define("actores_peliculas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    peliculas_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    actores_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});