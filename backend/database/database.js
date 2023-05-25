import { Sequelize } from "sequelize";

export const sequelize  = new Sequelize(
    'postgres', 
    'postgres', 
    '00000', 
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
