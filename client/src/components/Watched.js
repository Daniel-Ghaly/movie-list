import React from 'react';


const Watched = (props) => (
  <div className = 'watched'>
  <button onClick = {props.handleWatched} type = 'submit'>Watched</button>
  <button onClick = {props.handleToWatch} type = 'submit'>To Watch</button>

  </div>
);

export default Watched;