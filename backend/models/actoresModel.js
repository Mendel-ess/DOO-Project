import sequelize from  '../server';
import { DataTypes } from 'sequelize';

const actores = sequelize.define("actores", {
    actores_reparto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre_actor: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Personaje : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sexualidad : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});