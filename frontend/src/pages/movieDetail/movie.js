import React, { useEffect, useState } from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(`http://localhost:3003/pelis/${id}`);
        console.log(res)
        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);;

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`http://localhost:3003/${movie ? movie.img_back : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`http://localhost:3003/${movie ? movie.img : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie ? movie.titulo : ""}</div>
                        <div className="movie__rating">
                            {movie ? movie.puntuacion : ""} <i class="fas fa-star" />
                        </div>
                        <div className="movie__releaseDate">{movie ? "Fecha de salida: " + movie.fecha_salida : ""}</div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movie ? movie.descripcion : ""}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Movie