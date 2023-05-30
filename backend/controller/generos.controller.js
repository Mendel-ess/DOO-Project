import { generos } from "../models/generos.js"

export const getGeneros = async (req, res) => {
    const allgeneros = await generos.findAll();
    res.json(allgeneros)
}
