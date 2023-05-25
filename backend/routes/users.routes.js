import { Router } from 'express';
import { getUsers, crearUsers, borrarUser, validarUser, updateUser} from '../controller/users.controller.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', crearUsers);
router.post('/users/login', validarUser);
router.put('/users/modify', updateUser);
router.delete('/users/:id', borrarUser);

export default router;