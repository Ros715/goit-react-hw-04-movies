import React from "react";
import { Link /*, Route, Redirect, BrowserRouter*/ } from "react-router-dom";
import getMoviesByQuery from "../../apiServices/getMoviesByQuery.js";

class MoviesPage extends React.Component {
  state = {
    movies: [],
    query: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    getMoviesByQuery(this.state.query).then((apiOutput) => {
      //console.log(apiOutput.results);
      this.setState({ movies: apiOutput.results });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={(e) => {
              //console.log("name", e.currentTarget.value);
              this.setState({ query: e.currentTarget.value });
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
