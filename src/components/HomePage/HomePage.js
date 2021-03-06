import React from "react";
import { Link /*, Route, Redirect, BrowserRouter*/ } from "react-router-dom";
import getTrending from "../../apiServices/getTrending.js";

class HomePage extends React.Component {
  state = {
    movies: [],
  };
  mounted = false;

  async componentDidMount() {
    this.mounted = true;

    /*localStorage.setItem(
      "movies",
      JSON.stringify({ query: "", returnPath: "/" })
    );*/

    getTrending("movie", "day").then((apiOutput) => {
      if (this.mounted) this.setState({ movies: apiOutput.results });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      this.mounted && (
        <div>
          <p>Trending today</p>
          <ul>
            {this.state.movies.map((movie) => {
              return (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      search: "?",
                      state: { from: this.props.location },
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )
    );
  }
}

export default HomePage;
