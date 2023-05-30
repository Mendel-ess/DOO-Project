import { Router } from 'express';
import { getPeliculas, crearPelicula, borrarPelicula, getAllPelis } from '../controller/peliculas.controller.js';


const route = Router();

route.get('/pelis/:id', getPeliculas);
route.get('/peliculas', getAllPelis);
route.post('/peliculas',crearPelicula);
route.delete('/peliculas/:id', borrarPelicula);

export default route;
