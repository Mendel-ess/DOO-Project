const { Router } = require('express');
const axios = require('axios');
const router = Router();

//Process 
const movieList = [];

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b45c71139c410b3bdd8e814b3560a0d0&language=es')
.then(response => {
    movieList.push(response.data);
})
.catch(err => {
    console.log(err);
});

//Rutas
router.get('/', (req, res) => {
    res.json(movieList);
});

module.exports = router;