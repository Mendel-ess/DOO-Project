import { generos } from "../models/generos.js"

export const getGeneros = (req, res) => {

}

export const crearGenero = async (req, res) => {
    try {
        const { genres }  = req.body;
        await generos.bulkCreate(genres, {fields: ['name']});
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({mesagge: error.mesagge});
    }
}