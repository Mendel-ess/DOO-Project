import { Router } from 'express';
import { getPeliculas, crearPelicula, borrarPelicula } from '../controller/peliculas.controller.js';
import multer from 'multer';


const route = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/')
    },
    filename: (req, file, cb) => {
        const id = req.body.id
        const ext = file.originalname.split('.').pop();
        const img1 = id + ext;
        const img2 = id + '_back' + ext;
        let filename;
        if(file.fieldname === 'img') {
            filename = img1;
        } else if (file.fieldname === 'img_back'){
            filename = img2;
        }
        cb(null, filename);
    }
});
const upload = multer({storage});
route.get('/peliculas/:id', getPeliculas);
route.post('/peliculas', upload.fields([{name: 'img', maxCount: 1},{name: 'img_back', maxCount: 1}]),crearPelicula);
route.delete('/peliculas/:id', borrarPelicula);

export default route;
