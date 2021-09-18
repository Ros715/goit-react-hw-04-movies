import React from "react";
import { Link, Route /*, Redirect, BrowserRouter*/ } from "react-router-dom";
import getMovieById from "../../apiServices/getMovieById.js";
import "./MovieDetailsPage.css";
import Cast from "../../components/Cast/Cast.js";
import Reviews from "../../components/Reviews/Reviews.js";

class MovieDetailsPage extends React.Component {
  state = {
    movie: {},
  };
  mounted = false;
  goBackInfo = {
    pathname: this.props.location.state.from.pathname,
    search: this.props.location.search,
  };

  async componentDidMount() {
    this.mounted = true;
    getMovieById(this.props.match.params.movieId).then((apiOutput) => {
      if (this.mounted) this.setState({ movie: apiOutput });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleGoBack = () => {
    this.props.history.replace(this.goBackInfo);
  };

  render() {
    const IMAGE_URL = "https://image.tmdb.org"; /*https://www.themoviedb.org*/
    return (
      this.mounted && (
        <>
          <br />
          <button onClick={this.handleGoBack}>Go back</button>
          <br />
          <br />
          <div className="details">
            <div>
              {this.state.movie.backdrop_path ? (
                <img
                  src={`${IMAGE_URL}/t/p/w400${this.state.movie.backdrop_path}`}
                  alt="No in the data base"
                />
              ) : (
                <p>No image for this movie</p>
              )}
            </div>
            <div>
              <h3>{`${this.state.movie.title} (${this.state.movie.release_date})`}</h3>
              <p>{`User Score: ${Math.round(this.state.movie.popularity)}%`}</p>
              <h4>Overview</h4>
              <p>{this.state.movie.overview}</p>
              <h4>Genres</h4>
              <p>
                {this.state.movie.genres.reduce((total, current) => {
                  return total + " " + current.name;
                }, "")}
              </p>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${this.props.match.params.movieId}/cast`}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={`/movies/${this.props.match.params.movieId}/reviews`}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </>
      )
    );
  }
}

export default MovieDetailsPage;

/*
            <Link to={JSON.parse(localStorage.getItem("movies")).returnPath}>
              Go back
            </Link>
            <Link to={this.props.location.state.from}>Go back</Link>
*/
/*
            <Link
              to={{
                pathname: this.props.location.state.from.pathname,
                search: this.props.location.search,
              }}
            >
              Go back
            </Link>
*/
