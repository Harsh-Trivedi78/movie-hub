import { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './MovieCard';

import { ReactComponent as SearchIcon } from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=85cc7789';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Better Call Saul');
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='app'>
      <h1>CineFlix</h1>

      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon onClick={handleSearch} />
      </div>

      {
        movies?.length > 0
         ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
            </div>
          ) :
          (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }
    </div>
  );
};

export default App;