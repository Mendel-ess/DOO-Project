import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { actores_peliculas} from './actores_peliculas.js'
import { genres_map } from "./genres_map.js";

export const peliculas = sequelize.define("peliculas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.TEXT,
    },
    puntuacion : {
        type: DataTypes.INTEGER,
    },
    fecha_salida: {
        type: DataTypes.DATE,
    },
    para_adultos : {
        type: DataTypes.BOOLEAN,
    },
}, {
    timestamps:false
});