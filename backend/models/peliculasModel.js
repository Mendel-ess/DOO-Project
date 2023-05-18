import sequelize from "../server";
import { DataTypes } from "sequelize";

const peliculas = sequelize.define("peliculas", {
    movie_titles_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    puntuacion : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_salida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    para_adultos : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})