import { Router } from "express";
import { getGeneros, crearGenero } from "../controller/generos.controller.js";

const router = Router();

router.get('/generos', getGeneros);
router.post('/generos', crearGenero);

export default router;