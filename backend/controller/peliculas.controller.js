import { peliculas } from "../models/peliculas.js";

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
        console.log(req.body)
        const {id, titulo, descripcion, puntuacion, fecha_salida, para_adultos, img_back, img} = req.body;
        const back = req.files['img_back'][0].filename || 'assets/default_back.png';
        const def = req.files['img'][0].filename || 'assets/default.jpg';
        const pa = para_adultos || false;

        const newPeli = await peliculas.create({
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        puntuacion: puntuacion,
        fecha_salida: fecha_salida,
        para_adultos: pa,
        img_back: back,
        img : def
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
