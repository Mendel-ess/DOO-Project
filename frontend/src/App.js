import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { AuthProvider } from './components/Auth/AuthContext';
import Formulario from './pages/formPelicula/formpelicula';
import EditarFormulario from './pages/editarFormPeli/editarForm';
import EditarUsuario from './pages/editarUsuario/editarUsuario';


function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Header />
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="movie/:id" element={<Movie />}></Route>
              <Route path="movies/:type" element={<MovieList />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path='agregarpelicula' element={<Formulario />} ></Route>
              <Route path='editarpelicula' element={<EditarFormulario />} ></Route>
              <Route path='editarusuario' element={<EditarUsuario />} ></Route>
              <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;