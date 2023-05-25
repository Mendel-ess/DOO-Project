import { sq } from "../server";
import { DataTypes } from "sequelize";

const estudio_filmacion = sq.define("estudio_de_filmacion", {
  casa_de_filmacion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre_casa: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pais: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fecha_actual: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});
export default estudio_filmaciones;
