import React from "react";
import getMovieReviews from "../../apiServices/getMovieReviews.js";

class Reviews extends React.Component {
  state = {
    reviews: [],
  };
  mounted = false;

  async componentDidMount() {
    this.mounted = true;
    getMovieReviews(this.props.match.params.movieId).then((apiOutput) => {
      //console.log(apiOutput.results);
      if (this.mounted) this.setState({ reviews: apiOutput.results });
    });
  }

  componentWillUnmount() {
    //console.log("unmounted");
    this.mounted = false;
  }

  render() {
    return (
      this.mounted && (
        <ul>
          {this.state.reviews.length === 0 ? (
            <p>No rewiews for this movie.</p>
          ) : (
            this.state.reviews.map((review) => {
              return (
                <li key={review.id}>
                  <b>{review.author}</b>
                  <br />
                  {review.content}
                </li>
              );
            })
          )}
        </ul>
      )
    );
  }
}

export default Reviews;
