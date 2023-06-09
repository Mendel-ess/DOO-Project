import { users } from "../models/users.js";

export const getUsers = async (req, res) => {
    try {
        const allUsers = await users.findAll();
        res.json(allUsers);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const crearUsers = async (req , res ) => {
    
    try {
        const {username, password, email} = req.body;
        if (!(username && password && email)){
            res.status(400).send('Llena todos los espacios')
        }
        const newUser = await users.create({
            username: username,
            password: password,
            email: email
        });
    res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
export const updateUser = async (req, res) => {
    try {
        const { username, password, email} = req.body;
        const user = await users.findOne({where: { username }});
        if(user){
            user.username = username;
            user.password = password;
            user.email = email;
            await user.save();
            res.sendStatus(200);
        }else {
            res.sendStatus(409);
        }
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
export const borrarUser = async (req, res) => {
    try {
        const {id} = req.params;
        await users.destroy({
        where: {
            id: id
        }
    });
    res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const validarUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await users.findOne({where: { username }});
        if(!user){
            return res.sendStatus(404);
        }
        if(password !== user.password){
            return res.sendStatus(401);
        }
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}