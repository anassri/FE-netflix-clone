import './App.css'
import { Routes, Route } from "react-router";
import { Home } from './pages/home.page';
import { Shows } from './pages/shows.page';
import { Movies } from './pages/movies.page';
import { Games } from './pages/games.page';
import { Account } from './pages/account.page';
import { Login } from './pages/login.page';

const App = ()=>{
  
  return (
    <div className='main'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/games" element={<Games />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
