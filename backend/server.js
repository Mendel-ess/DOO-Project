import express from 'express';
import { sequelize } from './database/database.js';
import userRoutes from './routes/users.routes.js';
import pelisRoutes from './routes/peliculas.routes.js';
import generosRoutes from './routes/generos.routes.js';
import { generos } from './models/generos.js';
import { peliculas } from './models/peliculas.js';

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
server.use("/assets", express.static('assets'));

async function main() {
  try {
    await sequelize.sync({alter: true}).then(async () => {
      const c = await generos.count();
      const p = await peliculas.count();
      if(p == 0){
        await peliculas.bulkCreate(  [
          {
              "id": 1,
              "titulo": "John Wick 4",
              "descripcion": "John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
              "puntuacion": 8,
              "fecha_salida": "2023-03-22",
              "para_adultos": false,
              "img_back": "assets/id1_back.jpg",
              "img" : "assets/id1.jpg"
            },
            {
              "id": 2,
              "titulo": "Súper Mario Bros. La película",
              "descripcion": "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi.",
              "puntuacion": 7.8,
              "fecha_salida": "2023-04-05",
              "para_adultos": false,
              "img_back": "assets/id2_back.jpg",
              "img" : "assets/id2.jpg"
            },
            {
              "id": 3,
              "titulo": "Fast & Furious X",
              "descripcion": "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
              "puntuacion": 7.1,
              "fecha_salida": "2023-05-17",
              "para_adultos": false,
              "img_back": "assets/id3_back.jpg",
              "img" : "assets/id3.jpg"
            },
            {
              "id": 4,
              "titulo": "Posesión infernal: El despertar",
              "descripcion": "Historia de dos hermanas separadas cuyo reencuentro se ve interrumpido por el surgimiento de demonios poseedores de carne, empujándolos a una batalla por la supervivencia mientras se enfrentan a la versión de familia más aterradora que se pueda imaginar. Secuela de la trilgía original de 'Evil Dead'.",
              "puntuacion": 7.1,
              "fecha_salida": "2023-04-12",
              "para_adultos": false,
              "img_back": "assets/id4_back.jpg",
              "img" : "assets/id4.jpg"
            },
            {
              "id": 5,
              "titulo": "La sirenita",
              "descripcion": "Ariel es una joven y soñadora sirena, hija del Rey Tritón, que está cansada de su vida como princesa bajo el mar. Su mayor deseo es abandonar el fondo marino y tener una vida normal y apacible en la superficie. La bruja Úrsula descubre su anhelo y, por eso, a cambio de su preciosa voz le ofrece un cuerpo totalmente humano. Ariel acepta, movida por su pasión por conocer el mundo terrestre y porque está enamorada de un apuesto príncipe humano. Pero las cosas no serán fáciles para Ariel, ya que la bruja Úrsula esconde oscuras intenciones.",
              "puntuacion": 6.1,
              "fecha_salida": "2023-05-18",
              "para_adultos": false,
              "img_back": "assets/id5_back.jpg",
              "img" : "assets/id5.jpg"
            },
            {
              "id": 6,
              "titulo": "Sisu",
              "descripcion": "En lo profundo de la naturaleza salvaje de Laponia, Aatami Korpi está buscando oro, pero después de tropezar con una patrulla nazi, comienza una persecución impresionante y hambrienta de oro a través de la naturaleza salvaje de Laponia destruida y minada.",
              "puntuacion": 7.5,
              "fecha_salida": "2023-01-27",
              "para_adultos": false,
              "img_back": "assets/id6_back.jpg",
              "img" : "assets/id6.jpg"
            },
            {
              "id": 7,
              "titulo": "Ant-Man y la Avispa: Quantumanía",
              "descripcion": "La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.",
              "puntuacion": 6.5,
              "fecha_salida": "2023-02-15",
              "para_adultos": false,
              "img_back": "assets/id7_back.jpg",
              "img" : "assets/id7.jpg"
            },
            {
              "id": 8,
              "titulo": "Guardianes de la Galaxia: Volumen 3",
              "descripcion": "Star-Lord, todavía recuperándose de la pérdida de Gamora, debe reunir a su equipo para defender el universo junto con la protección de uno de los suyos. Una misión que, si no se completa, podría llevar al final de los Guardianes tal como los conocemos.",
              "puntuacion": 8.1,
              "fecha_salida": "2023-05-03",
              "para_adultos": false,
              "img_back": "assets/id8_back.jpg",
              "img" : "assets/id8.jpg"
            },
            {
              "id": 9,
              "titulo": "El exorcista del papa",
              "descripcion": "Película sobre Gabriele Amorth, un sacerdote que ejerció como exorcista principal del Vaticano, realizando más de cien mil exorcismos a lo largo de su vida. Amorth escribió dos libros de memorias donde detalló sus experiencias luchando contra Satanás.",
              "puntuacion": 7.3,
              "fecha_salida": "2023-04-05",
              "para_adultos": false,
              "img_back": "assets/id9_back.jpg",
              "img" : "assets/id9.jpg"
            },
            {
              "id": 10,
              "titulo": "Avatar: El sentido del agua",
              "descripcion": "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
              "puntuacion": 7.7,
              "fecha_salida": "2022-12-14",
              "para_adultos": false,
              "img_back": "assets/id10_back.jpg",
              "img" : "assets/id10.jpg"
            }    
        ])
      }
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