import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { actores } from "./actores.js";
import { sexualidad } from "./sexualidad.js";

export const actores_sexo = sequelize.define("actores_sexo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

actores.belongsToMany(sexualidad, {through: 'actores_sexo'});
sexualidad.belongsToMany(actores, {through: 'actores_sexo'});