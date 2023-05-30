import React, {useEffect, useState} from "react"
import "./movieList.css"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    
    useEffect(() => {
        const getMovie = async () =>{
            try {
                const res = await fetch('http://127.0.0.1:3003/peliculas');
                const data = await res.json();
                setMovieList(data);
            } catch (error) {
                console.log(error)
            }
        };
        getMovie();
    }, []);

    return (
        <div className="movie__list">
            <h2 className="list__title">POPULAR</h2>
            <div className="list__cards">
                {
                    
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList