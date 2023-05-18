import sequelize from "../server";
import { DataTypes } from "sequelize";

const sexualidad = sequelize.define("sexualidad", {
    generos_actores_id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    genero : {
        type: DataTypes.TEXT,
        allowNull : false
    }
})