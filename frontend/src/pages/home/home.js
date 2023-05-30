import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [movieList, setMovieList] = useState([])
    
    useEffect(() => {
        const getMovie = async () =>{
            try {
                const res = await fetch('http://localhost:3003/peliculas');
                const data = await res.json();
                setMovieList(data);
            } catch (error) {
                console.log(error)
            }
        };
        getMovie();
        console.log(MovieList)
    }, []);

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        movieList.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/pelicula/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`http://localhost:3003/${movie?movie.img_back:""}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.titulo: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.fecha_salida : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.puntuacion :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.descripcion : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home