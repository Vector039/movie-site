import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesCard from './components/MoviesCard'

function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9084db94f51247383c8669ee33e657c8"

  const API_SEARCH = "https://api.themoviedb.org/3/movie/popular?api_key=9084db94f51247383c8669ee33e657c8&query="
  
  

  const [movies,setMovies] = useState([])
  const [query,setQuery] = useState('')

  useEffect(()=> {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[])

  const handleSearch = (e) => {
    e.preventDefault()

    fetch(API_SEARCH + query)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }

  return (
    <div className="App">
      <div className="search_nav">
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div className='search_box'>
          <form onSubmit={handleSearch}>
            <input type='text' value={query} onChange={(e)=> setQuery(e.target.value)}/>
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {
          movies.map((movie)=>(
            <MoviesCard {...movie} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
