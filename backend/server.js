const express = require('express');
const server = express();
const port = process.env.PORT || 3003;

server.use('/api/movies', require('./routes/movies'));
server.use(express.urlencoded({extended: false}));
server.use(express.json());


server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
