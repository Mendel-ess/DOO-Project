import sq from "../controller/dbConnect";
import { DataTypes } from "sequelize";

const genre = sq.define("movie_genres", {
    movie_genres_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }, 
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
genre.sync().then(() => {
    console.log("Generos sincronizados")
});

module.export = genre;
