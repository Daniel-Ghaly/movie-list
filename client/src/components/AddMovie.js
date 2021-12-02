import React from 'react';


const AddMovie = (props) => (
  <div className = "add-movie"> Add Movie
    <input onChange = {props.addMovieTextInputHandler}type = 'text'></input>
    <button onClick = {props.addMovieHandler} type = 'submit'>Search</button>
  </div>
);

export default AddMovie;