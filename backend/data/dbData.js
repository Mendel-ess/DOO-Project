const { Router } = require('express');
const axios = require('axios');
const router = Router();

//Process 
let movieList, movieName, movieRate, movieAdult, movieDate, movieId;
let genreList, genrename;
let actoresName, actoresGender, actoresCharac, actoresList;


//peliculas
axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b45c71139c410b3bdd8e814b3560a0d0&language=es')
.then(response => {
    movieList = Object.values(response.data);
    movieName = movieList[1].map(i => i.title);
    movieRate = movieList[1].map(i => i.vote_average);
    movieAdult = movieList[1].map(i => i.adult);
    movieDate = movieList[1].map(i => i.release_date);
    movieId = movieList[1].map(i => i.id);
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

//actores
axios.get('https://api.themoviedb.org/3/movie/502356/credits?api_key=b45c71139c410b3bdd8e814b3560a0d0&language=es')
.then(res => {
    actoresList = Object.values(res.data);
    actoresName = actoresList[1].map(i => i.name);
    actoresCharac = actoresList[1].map(i => i.character);
    actoresGender = actoresList[1].map(i => i.gender);
})

//Rutas
router.get('/', (req, res) => {
    console.log(movieId);
});

router.get('/genres', (req, res) => {
    console.log(genrename);
})

router.get('/actores', (req, res) => {
    console.log(actoresName);
    console.log(actoresCharac);
    console.log(actoresGender);
});

module.exports = router;