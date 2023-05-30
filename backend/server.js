import express from 'express';
import { sequelize } from './database/database.js';
import userRoutes from './routes/users.routes.js';
import pelisRoutes from './routes/peliculas.routes.js';
import generosRoutes from './routes/generos.routes.js';
import { generos } from './models/generos.js';

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
server.use(express.static('assets'));

async function main() {
  try {
    await sequelize.sync({alter: true}).then(async () => {
      const c = await generos.count();
      if(c == 0){
        await generos.bulkCreate([
          { id: 1, nombre: 'Acción' },
          { id: 2,nombre: 'Aventura' },
          { id: 3,nombre: 'Animación' },
          { id: 4,nombre: 'Comedia' },
          { id: 5,nombre: 'Crimen' },
          { id: 6,nombre: 'Documental' },
          { id: 7,nombre: 'Drama' },
          { id: 8,nombre: 'Familia' },
          { id: 9,nombre: 'Fantasía' },
          { id: 10,nombre: 'Historia' },
          { id: 11,nombre: 'Terror' },
          { id: 12,nombre: 'Música' },
          { id: 13,nombre: 'Misterio' },
          { id: 14,nombre: 'Romance' },
          { id: 15,nombre: 'Ciencia ficción' },
          { id: 16,nombre: 'Película de TV' },
          { id: 17,nombre: 'Suspense' },
          { id: 18,nombre: 'Bélica' },
          { id: 19,nombre: 'Western' }
        ]);
      }

    });
    server.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();