import { Router } from "express";
import { getGeneros} from "../controller/generos.controller.js";

const router = Router();

router.get('/generos', getGeneros);


export default router;