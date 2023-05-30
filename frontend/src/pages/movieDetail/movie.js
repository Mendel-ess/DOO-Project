import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`http://localhost:3003/peliculas/${id}`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`http://localhost:3003/${currentMovieDetail ? currentMovieDetail.img_back : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`http://localhost:3003/${currentMovieDetail ? currentMovieDetail.img : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.titulo : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.puntuacion: ""} <i class="fas fa-star" />
                        </div>  
                        <div className="movie__releaseDate">{currentMovieDetail ? "Fecha de salida: " + currentMovieDetail.fecha_salida : ""}</div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.descripcion : ""}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Movie