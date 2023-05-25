import express from 'express';
import { sequelize } from './database/database.js';
import userRoutes from './routes/users.routes.js';
import pelisRoutes from './routes/peliculas.routes.js';
import generosRoutes from './routes/generos.routes.js';

const server = express();
const port = process.env.PORT || 3003;

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Reemplaza con la URL de tu dominio de React
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(userRoutes);
server.use(pelisRoutes);
server.use(generosRoutes);

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