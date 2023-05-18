const express = require('express');
const client = require('./controller/db');
const server = express();
const port = process.env.PORT || 3003;

//base dedatos
const Sequelize = require('sequelize')
const sequelize  = new Sequelize('postgres', 'postgres', '00000', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  }).catch(err => {
    console.log("No se pudo conectar la base de datos");
  });
  
//servidor
server.use('/api/movies', require('./data/dbData'));
server.use(express.urlencoded({extended: false}));
server.use(express.json());

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = sequelize;




