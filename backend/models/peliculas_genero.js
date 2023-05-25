import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { peliculas } from "./peliculas.js";
import { generos } from "./generos.js";

export const peliculas_generos = sequelize.define("peliculas_generos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

peliculas.belongsToMany(generos, { through: 'peliculas_generos'});
generos.belongsToMany(peliculas, {through: 'peliculas_generos'});