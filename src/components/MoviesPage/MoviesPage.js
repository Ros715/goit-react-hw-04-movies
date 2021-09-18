import React from "react";
import { Link /*, Route, Redirect, BrowserRouter*/ } from "react-router-dom";
import getMoviesByQuery from "../../apiServices/getMoviesByQuery.js";
import queryString from "query-string";

class MoviesPage extends React.Component {
  state = {
    movies: [],
    query: "",
  };

  async componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams.query) {
      getMoviesByQuery(queryParams.query).then((apiOutput) => {
        //console.log(apiOutput.results);
        this.setState({
          movies: apiOutput.results,
          query: queryParams.query,
        });
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    /*localStorage.setItem(
      "movies",
      JSON.stringify({ query: this.state.query, returnPath: "/movies" })
    );*/

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
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    search: `?query=${this.state.query}`,
                    state: {
                      from: this.props.location,
                    },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
/*
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
*/
/*
    const storedTxt = localStorage.getItem("movies");
    if (storedTxt) {
      const storedObject = JSON.parse(storedTxt);
      storedObject.returnPath = "/movies";
      localStorage.setItem("movies", JSON.stringify(storedObject));
      //console.log(storedObject);

      if (storedObject.query.length > 0) {
        getMoviesByQuery(storedObject.query).then((apiOutput) => {
          //console.log(apiOutput.results);
          this.setState({
            movies: apiOutput.results,
            query: storedObject.query,
          });
        });
      }
    }
    */
