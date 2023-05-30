import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const peliculas = sequelize.define("peliculas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.TEXT,
    },
    descripcion: {
        type: DataTypes.TEXT
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
    img_back: {
        type: DataTypes.TEXT
    },
    img : {
        type: DataTypes.TEXT
    }
}, {
    timestamps:false
});