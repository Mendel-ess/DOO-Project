import { peliculas } from "../models/peliculas.js"

export const getPeliculas = async (req, res) => {
    try {
        const allMovies = await peliculas.findAll();
        res.json(allMovies);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const crearPelicula = async (req, res) => {
    try {
        const {titulo, puntuacion, fecha_salida, para_adultos} = req.body;
        const newPeli = await peliculas.create({
        titulo: titulo,
        puntuacion: puntuacion,
        fecha_salida: fecha_salida,
        para_adultos: para_adultos
    });
    res.json(newPeli);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const borrarPelicula = async (req, res) => {
    try {
        const {id } = req.params;
        await peliculas.destroy({
            where: {
                id
            }
        });
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}
