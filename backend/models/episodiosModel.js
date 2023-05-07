import { sq } from "../server";
import { DataTypes } from "sequelize";

const episodios = sq.define("episodios", {
  episodio_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  episodio_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  episodio_title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha_emision: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  duracion: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  movie_title: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default episodios;
