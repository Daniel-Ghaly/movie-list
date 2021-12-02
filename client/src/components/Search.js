import React from 'react';


const Search = (props) => (
  <div className = 'search'> Search
  <input onChange = {props.searchTextInputHandler}type = 'text'></input>
  <button onClick = {props.searchHandler} type = 'submit'>Search</button>
  </div>
);

export default Search;