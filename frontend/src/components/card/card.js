import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}, img) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/pelis/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`http://localhost:3003/${movie?movie.img:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.titutlo:""}</div>
                    <div className="card__runtime">
                        {movie?movie.fecha_salida:""}
                        <span className="card__rating">{movie?movie.puntuacion:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.descripcion.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards