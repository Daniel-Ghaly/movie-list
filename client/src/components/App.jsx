import React from 'react';
import Movie from './Movie.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import Watched from './Watched.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.movieList = [

    ]
    this.displayedMovies = this.movieList.slice()
    this.state = {
      displayedMovies: this.displayedMovies,
      searchTextInput: '',
      addMovieTextInput:''
    }
  }

  handleWatchedButton(movie) {

    console.log('a')

    for(var i = 0; i < this.displayedMovies.length;i++) {
      if (JSON.stringify(movie) === JSON.stringify(this.displayedMovies[i]) ) {
        this.displayedMovies[i] = {title: movie.title, watched: "Watched"}
      }
    }
    this.setState({displayedMovies: this.displayedMovies})

  }


  searchHandler() {
    // console.log('click')
    var searchTerm = this.state.searchTextInput
    console.log(this.displayedMovies)
    var updatedMovieList = this.displayedMovies.filter(function(movie) {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState ({displayedMovies: updatedMovieList, searchTextInput: ''})

  }

  searchTextInputHandler(e) {
    // console.log('onChange')
    this.setState({searchTextInput: e.target.value})
  }

  addMovieTextInputHandler(e) {
    console.log('onChange')
    this.setState({addMovieTextInput: e.target.value})
  }

  addMovieHandler() {
    console.log('test')
    var movie = {title: this.state.addMovieTextInput, watched: 'To Watch'}
    this.displayedMovies.push(movie)
    this.setState({displayedMovies: this.displayedMovies})
  }

  handleWatched() {
    console.log('d')
    var watchedMovies = [];
    for(var i = 0; i < this.displayedMovies.length;i++) {
      var movie = this.displayedMovies[i]
      if (movie.watched === 'Watched')  {
        watchedMovies.push(movie)
      }
    }
    this.setState({displayedMovies: watchedMovies})


  }

  handleToWatch() {
    console.log('b')

    var unwatchedMovies = [];
    for(var i = 0; i < this.displayedMovies.length;i++) {
      var movie = this.displayedMovies[i]
      if (movie.watched === 'To Watch')  {
        unwatchedMovies.push(movie)
      }
    }
    this.setState({displayedMovies: unwatchedMovies})

  }



  render() {
    return (
      <div className = "container"> Movie List

        <AddMovie addMovieTextInputHandler = {this.addMovieTextInputHandler.bind(this)} addMovieHandler = {() => this.addMovieHandler()} movies = {this.state.displayedMovies} />
        <Search searchTextInputHandler = {this.searchTextInputHandler.bind(this)} searchHandler = {() => this.searchHandler()} movies = {this.state.displayedMovies}/>

        <Watched movies = {this.state.displayedMovies} handleWatched = {this.handleWatched.bind(this)} handleToWatch =  {this.handleToWatch.bind(this)}/>

        <ul className = 'list-container'>
          {this.state.displayedMovies.map( (movie) =>
            <Movie handleWatchedButton = {this.handleWatchedButton.bind(this)} movie = {movie}/>
          )}
        </ul>
      </div>
    )
  }

}


// App = (props) => (
//   <div class = "container"> Movie List
//     <ul>
//       {movies.map( (movie) =>
//         <Movie movie = {movie.title}/>
//       )}
//     </ul>
//   </div>
// );

export default App;