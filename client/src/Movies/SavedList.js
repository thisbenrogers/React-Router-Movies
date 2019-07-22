import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <Link to={`/movies/${index}`} key={index} className="saved-movie">{movie.title}</Link>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  )
};

export default SavedList;
