const { Router } = require('express');
const axios = require('axios');
const router = Router();

//Process 
const movieList = [];
let genreList, genrename;


//peliculas
axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b45c71139c410b3bdd8e814b3560a0d0&language=es')
.then(response => {
    movieList.push(response.data);
})
.catch(err => {
    console.log(err);
});

//generos
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b45c71139c410b3bdd8e814b3560a0d0&language=es')
    .then(response => {
      genreList = Object.values(response.data);
      genrename = genreList[0].map(i => i.name);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });

//Rutas
router.get('/', (req, res) => {
    res.json(movieList);
});

router.get('/genres', (req, res) => {
    console.log(genrename);
})

module.exports = router;
module.exports.genreName = genrename;