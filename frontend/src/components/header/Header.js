import React, { useContext } from "react"
import "./Header.css"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Auth/AuthContext";

const Header = () => {
    const { loggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlelogout = () => {
        logout();
        navigate('/'); 
    };
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://lh3.googleusercontent.com/l0DQtBsN_AE73Rc1r1UX6Osdlgv7Xa6vUTHbMsW6zPpZAoGcjp0rkkQSIe8s_dVQzJHO4Lykg8anPEiPfSnK7gqR4s43guqdjqTVICs" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>               
            </div>
            {loggedIn ? (
                <div className="headerRight">
                <Link to="/dashboard"style={{textDecoration: "none"}}><span>Dashboard</span></Link>
                <button onClick={handlelogout}>Cerrar sesion</button>
                </div>
            ) :(
                <div className="headerRight">
                <Link to="/login" style={{textDecoration: "none"}}><span>Iniciar Sesion</span></Link>
                <Link to="/register" style={{textDecoration: "none"}}><span>Registrarse</span></Link> 
                </div>
            )}
        </div>
    );
};

export default Header