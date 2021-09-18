import React from "react";
//import { Link /*, Route, Redirect, BrowserRouter*/ } from "react-router-dom";
import getMovieCast from "../../apiServices/getMovieCast.js";

class Cast extends React.Component {
  state = {
    cast: [],
  };
  mounted = false;

  async componentDidMount() {
    //console.log("#2", this.props.match.params);
    this.mounted = true;
    getMovieCast(this.props.match.params.movieId).then((apiOutput) => {
      //console.log(apiOutput.cast);
      if (this.mounted) this.setState({ cast: apiOutput.cast });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const IMAGE_URL = "https://image.tmdb.org"; /*https://www.themoviedb.org*/
    return (
      this.mounted && (
        <div>
          <ul>
            {this.state.cast.map((actor) => {
              return (
                <li key={actor.id}>
                  {actor.profile_path ? (
                    <img
                      src={`${IMAGE_URL}/t/p/w200${actor.profile_path}`}
                      alt="No in the data base"
                    />
                  ) : (
                    <p>No image for this actor</p>
                  )}
                  <p>{actor.name}</p>
                  <p>{`Character: ${actor.character}`}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )
    );
  }
}

export default Cast;
