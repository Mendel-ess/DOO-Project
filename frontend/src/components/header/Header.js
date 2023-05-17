import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://lh3.googleusercontent.com/l0DQtBsN_AE73Rc1r1UX6Osdlgv7Xa6vUTHbMsW6zPpZAoGcjp0rkkQSIe8s_dVQzJHO4Lykg8anPEiPfSnK7gqR4s43guqdjqTVICs" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                
            </div>
            <div className="headerRight">
                <Link to="/login" style={{textDecoration: "none"}}><span>Iniciar Sesion</span></Link>
                <Link to="/register" style={{textDecoration: "none"}}><span>Registrarse</span></Link> 
            </div>
        </div>
    )
}

export default Header