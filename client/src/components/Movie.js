import React from 'react';


const Movie = (props) => (
  <div className = "movie-container">
    <li onClick = {props.handleMovieTitleClick}>{props.movie.title}
      <button onClick = {() => props.handleWatchedButton(props.movie)}>{props.movie.watched}</button>
    </li>
    <div></div>

  </div>
);
export default Movie;