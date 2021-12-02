import React from 'react';




const Movie = (props) => {

  console.log(props.index)
  if(props.dropdown.includes(props.index)) {
    return (
    <div className = "movie-container">
    <li onClick = {() => props.handleMovieTitleClick(props.movie, props.index)}>{props.movie.title}
      <button onClick = {() => props.handleWatchedButton(props.movie)}>{props.movie.watched}</button>
    </li>
    <div>Year: {props.movie.year}</div>
  </div>
  )

  } else {
    return (
      <div className = "movie-container">
      <li onClick = {() => props.handleMovieTitleClick(props.movie, props.index)}>{props.movie.title}
        <button onClick = {() => props.handleWatchedButton(props.movie)}>{props.movie.watched}</button>
      </li>
      {/* <div>No Year: {props.movie.year}</div> */}
    </div>
    )
  }


};
export default Movie;