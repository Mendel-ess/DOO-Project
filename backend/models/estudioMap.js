import { sq } from "../server";
import { DataTypes } from "sequelize";

const estudio_map = sq.define("estudio_map", {
  estudio_map: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  movie_titles_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estudio_de_filmacione_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
