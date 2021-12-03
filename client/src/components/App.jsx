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
      allMovies: [],
      currentView: [],
      unwatchedMovies: [],
      watchedMovies:[],
      displayedMovies: this.displayedMovies,
      searchTextInput: '',
      addMovieTextInput:'',
      dropdown: [],
      displayedSearchResults: []
    }
  }

  handleWatchedButton(movie) {


    // var unwatchedMovies = [];
    // for(var i = 0; i < this.displayedSearchResults.length;i++) {
    //   var movie = this.displayedSearchResults[i]
    //   if (movie.watched === 'To Watch')  {
    //     unwatchedMovies.push(movie)
    //   }
    // }
    // this.setState({unwatchedMovies: unwatchedMovies})

    console.log(movie)

    var currentView = this.state.currentView.slice()
    var unwatchedMovies = this.state.unwatchedMovies.slice()
    for(var i = 0; i < currentView.length;i++) {
      if (JSON.stringify(movie) === JSON.stringify(currentView[i]) ) {
        // currentView[i] = {title: movie.title, watched: "Watched"}
        unwatchedMovies.push({title: movie.title, watched: "To Watch"})

      }
    }
    this.setState({unwatchedMovies: unwatchedMovies})

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


    var searchTerm = this.state.addMovieTextInput
    var settings = {

      'url':`https://api.themoviedb.org/3/search/movie?api_key=9d5e94e46cbf63ea06b002c66d0bc9c8&language=en-US&query='${searchTerm}'&page=1&include_adult=false`,
      'method': 'GET'
    }

    let that = this;
    $.ajax(settings).done(function(response) {
      var movieResults = response.results
      console.log(movieResults)

      var displayedSearchResults = [];
      for(var i = 0; i < movieResults.length;i++) {
        var movieResult = movieResults[i]
        var movie = {title: movieResult.original_title, watched: 'To Watch', year: movieResult.release_date.substring(0,4)}
        displayedSearchResults.push(movie);
      }
      that.setState({currentView: displayedSearchResults})

      console.log(movie)

      })






    // console.log('test')
    // var movie = {title: this.state.addMovieTextInput, watched: 'To Watch'}
    // this.displayedMovies.push(movie)




    // this.setState({displayedMovies: this.displayedMovies})




  }

  handleWatched() {
    // console.log('d')


    // var watchedMovies = this.state.watchedMovies.slice()
    // for(var i = 0; i < currentView.length;i++) {
    //   var movie = currentView[i]
    //   if (movie.watched === 'Watched')  {
    //     watchedMovies.push(movie)
    //     this.setState({currentView:)
    //   }
    // }
    this.setState({currentView: this.state.watchedMovies})


  }

  handleToWatch() {
    console.log('b')


    this.setState({currentView: this.state.unwatchedMovies})


    // var unwatchedMovies = [];
    // for(var i = 0; i < this.displayedSearchResults.length;i++) {
    //   var movie = this.displayedSearchResults[i]
    //   if (movie.watched === 'To Watch')  {
    //     unwatchedMovies.push(movie)
    //   }
    // }
    // this.setState({unwatchedMovies: unwatchedMovies})

  }


  handleMovieTitleClick(movie, index) {
    console.log('abc')
    var movieTitle = movie.title;
    if (movieTitle.includes('To Watch')) {
      var indexForSlice = movieTitle.indexOf('To Watch')
      movieTitle = movieTitle.slice(0, indexForSlice)
    }
    if (movieTitle.includes('Watched')) {
      var indexForSlice = movieTitle.indexOf('Watched')
      movieTitle = movieTitle.slice(0, indexForSlice)
    }
    console.log(movieTitle)

    movieTitle = movieTitle.replaceAll(' ', '%20')

    var settings = {

      'url':`https://api.themoviedb.org/3/search/movie?api_key=9d5e94e46cbf63ea06b002c66d0bc9c8&language=en-US&query='${movieTitle}'&page=1&include_adult=false`,
      'method': 'GET'
    }



    $.ajax(settings).done(function(response) {
      var movieData = response.results[0]
      console.log(movieData)

      console.log(movie)

      })

    // var updatedMovie = JSON.stringify(movie)
    // updatedMovie.year = movieData.release_date.substring(0,4)

    // var movieList = this.state.displayedMovies.slice()

    // movieList[index] =
    // for (var i = 0; i < movieList.length;i++) {

    // }



      var dropdown = this.state.dropdown;
      dropdown.push(index)
      this.setState({dropdown: dropdown})




  }


  render() {
    return (
      <div className = "container"> Movie List

        <AddMovie addMovieTextInputHandler = {this.addMovieTextInputHandler.bind(this)} addMovieHandler = {() => this.addMovieHandler()}  />
        <Search searchTextInputHandler = {this.searchTextInputHandler.bind(this)} searchHandler = {() => this.searchHandler()} movies = {this.state.displayedMovies}/>

        <Watched movies = {this.state.displayedMovies} handleWatched = {this.handleWatched.bind(this)} handleToWatch =  {this.handleToWatch.bind(this)}/>

        <ul className = 'list-container'>
          {this.state.currentView.map( (movie, i) =>
            <Movie unwatchedMovies = {JSON.stringify(this.state.unwatchedMovies)}  currentView = {JSON.stringify(this.state.currentView)} index = {i} handleWatchedButton = {this.handleWatchedButton.bind(this)} movie = {movie} dropdown = {this.state.dropdown} handleMovieTitleClick = {this.handleMovieTitleClick.bind(this)}/>
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