import React from 'react';


const Movie = (props) => (
  <div className = "movie-container">
    <li>{props.movie.title}
      <button onClick = {() => props.handleWatchedButton(props.movie)}>{props.movie.watched}</button>
    </li>

  </div>
);
export default Movie;