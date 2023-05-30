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
        const {titulo, descripcion, puntuacion, fecha_salida, para_adultos, img_back, img} = req.body;
        const newPeli = await peliculas.bulkCreate({
        titulo: titulo,
        descripcion: descripcion,
        puntuacion: puntuacion,
        fecha_salida: fecha_salida,
        para_adultos: para_adultos,
        img_back: img_back,
        img : img
    });
    res.sendStatus(200);
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
