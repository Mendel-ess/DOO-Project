import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { peliculas } from "./peliculas.js";
import { actores } from "./actores.js";

export const peliculas_actores = sequelize.define("pelicuals_actores", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

peliculas.belongsToMany(actores, {through: 'peliculas_actores'});
actores.belongsToMany(peliculas, {through: 'peliculas_actores'});