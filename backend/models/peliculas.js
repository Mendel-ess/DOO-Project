import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { actores_peliculas} from './actores_peliculas.js'
import { genres_map } from "./genres_map.js";

export const peliculas = sequelize.define("peliculas", {
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
    },
    reviews: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps:false
});