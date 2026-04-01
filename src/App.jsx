import './App.css'
import { Routes, Route } from "react-router";
import { Home } from './pages/home.page';
import { Shows } from './pages/shows.page';
import { Movies } from './pages/movies.page';
import { Games } from './pages/games.page';
import { Account } from './pages/account.page';
import { Login } from './pages/login.page';
import {useReducer} from 'react';


const initialState = {
  loading: false,
  error: '',
  data: [], // [ ]
  likedTitles: []
}

const fetchReducer = (state, action)=>{
  switch(action.type) {
      case 'LOADING':
          return {...state, loading: true}
      case 'ERROR': 
          return {...state, error: action.payload, loading: false}
      case 'SUCCESSFUL':
          return {...state, data: action.payload, loading: false}
      case 'ADD_LIKED_TITLE':
          return {...state, likedTitles: [...state.likedTitles, action.payload]}
      case 'REMOVE_LIKED_TITLE':
          return {...state, likedTitles: state.likedTitles.filter((title)=> title.id !== action.payload)}
      default:
          return {...state, loading: false, error: ''} 
  }   
}


const App = ()=>{
  const [state, dispatch] = useReducer(fetchReducer, initialState)
  return (
    <div className='main'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account  {...state} dispatch={dispatch}  />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/games" element={<Games />} />
        <Route path="/" element={<Home {...state} dispatch={dispatch} />} />
      </Routes>
    </div>
  )
}

export default App
