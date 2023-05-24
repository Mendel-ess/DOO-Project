import express from 'express';
import { sequelize } from './database/database.js';
import './models/users.js';

const server = express();
const port = process.env.PORT || 3003;

server.use(express.json());
server.use(express.urlencoded({extended: false}));

async function main() {
  try {
    await sequelize.sync({alter: true});
    server.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();