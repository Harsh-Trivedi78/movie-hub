import React from 'react'

const MovieCard = ({ movie }) => {
    return(
        <div className='container'>
        <div className='movie'>
          <p>{movie.Year}</p>
          <img src={movie.Poster!== 'N/A'? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
          <div>
            <span>
              {movie.Type}
            </span>
            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
              <h3>{movie.Title}</h3>
            </a>
          </div>
        </div>
      </div>
    )
}

export default MovieCard;