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
  //path = this.props.location.pathname.split("/");
  //movieId = this.path[2];

  async componentDidMount() {
    //console.log("#1", this.props.match.params);
    this.mounted = true;
    getMovieById(this.props.match.params.movieId).then((apiOutput) => {
      //console.log(apiOutput);
      if (this.mounted) this.setState({ movie: apiOutput });
    });
  }

  componentWillUnmount() {
    //console.log("unmounted");
    this.mounted = false;
  }

  render() {
    const BASE_URL = "https://image.tmdb.org"; /*https://www.themoviedb.org*/
    //console.log(this.props.history);
    return (
      this.mounted && (
        <>
          <br />
          <button>
            <Link to="/">Go back</Link>
          </button>
          <br />
          <br />
          <div className="details">
            <div>
              <img
                src={`${BASE_URL}/t/p/w400${this.state.movie.backdrop_path}`}
                alt=""
              />
            </div>
            <div>
              <h3>{`${this.state.movie.title} (${this.state.movie.release_date})`}</h3>
              <p>{`User Score: ${this.state.movie.popularity}%`}</p>
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
