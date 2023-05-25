import { Router } from 'express';
import { getPeliculas, crearPelicula, borrarPelicula } from '../controller/peliculas.controller.js';

const route = Router();

route.get('/peliculas', getPeliculas);
route.post('/peliculas', crearPelicula);
route.delete('/peliculas/:id', borrarPelicula);

export default route;
