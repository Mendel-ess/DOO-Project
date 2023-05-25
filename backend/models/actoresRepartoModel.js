import { sq } from "../server";
import { DataTypes } from "sequelize";

const actores_reparto = sq.define("actores_reparto", {
  actores_reparto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  nombre_actor: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rol: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
  },
});

export default actores_reparto;
