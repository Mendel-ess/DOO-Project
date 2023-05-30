import { users } from "../models/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {serialize} from 'cookie';

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
            res.status(400).send('Llena todos los espacios');
        }
        encrypPass = bcrypt.hash(password)

        const newUser = await users.create({
            username: username,
            password: encrypPass,
            email: email
        });
        const token = jwt.sign({
            exp: Math.floor(Date.now / 1000) + 60*60*24*30,
            email: email,
            username: username
        }, 'token');
        const seria = serialize('new_token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 1000*60*60*24*30,
            path: '/'
        })
        res.setHeader('Authorization', `Bearer ${seria}`);
    res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password, email} = req.body;
        const user = await users.findByPk(id);
        user.username = username;
        user.password = password;
        user.email = email;
        await user.save();

        res.sendStatus(200);
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