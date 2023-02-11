
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Top from './components/Top.js'
import Search from './components/Search'
import Login from './components/Login'
import Watchlist from './components/Watchlist';
import Moviemain from './components/Moviemain';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path = '/' element ={<Home/>}></Route>
        <Route exact path = '/movie/:id' element ={<Moviemain/>}></Route>
        <Route exact path = 'movies' element ={<Top
        type = {"https://api.themoviedb.org/3/discover/movie"}
        name = {"Movies"}
        />}></Route>
        <Route exact path = 'search' element ={<Search/>}></Route>
        <Route exact path = 'watchlist' element ={<Watchlist/>}></Route>
        <Route exact path = 'login' element ={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
