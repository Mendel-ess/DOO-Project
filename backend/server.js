const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
