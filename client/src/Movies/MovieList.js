// Make it so that the card in MovieList is a link, this should direct the user to the /movies/{id of movie here} URL
// , where :id is the id of the individual movie.
// When a user clicks on a movie card they should be taken to /movies/{id of movie here} 
// to see the details for the selected movie.
// You will need to modify line 13 of Movie.js in order to accept the correct id for the movie selected.
// Add functionality so the Home button on the SavedList component navigates back to home.
// You should now be able to navigate back and forth between the individual movies and the home screen.


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { id, title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
}

export default MovieList;
