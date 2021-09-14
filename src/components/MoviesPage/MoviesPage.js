import React from "react";
import { Link /*, Route, Redirect, BrowserRouter*/ } from "react-router-dom";
import getMoviesByQuery from "../../apiServices/getMoviesByQuery.js";

class MoviesPage extends React.Component {
  state = {
    movies: [],
    query: "",
  };

  async componentDidMount() {
    const x = localStorage.getItem("movies");
    if (x) {
      const y = JSON.parse(x);
      y.returnPath = "/movies";
      localStorage.setItem("movies", JSON.stringify(y));
      //console.log(y);
      if (y.query.length > 0) {
        getMoviesByQuery(y.query).then((apiOutput) => {
          //console.log(apiOutput.results);
          this.setState({ movies: apiOutput.results, query: y.query });
        });
      }
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "movies",
      JSON.stringify({ query: this.state.query, returnPath: "/movies" })
    );

    if (this.state.query.length > 0) {
      getMoviesByQuery(this.state.query).then((apiOutput) => {
        //console.log(apiOutput.results);
        this.setState({ movies: apiOutput.results });
      });
    } else {
      this.setState({ movies: [] });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={(e) => {
              //console.log("name", e.currentTarget.value);
              this.setState({ query: e.currentTarget.value.trim() });
            }}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;