const BASE_URL = "https://api.themoviedb.org/3";
const myKey = "c3df5a3d5b89cc698ddf2b6481fb989c";
/*
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
*/

export default function getMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${myKey}`;
  return fetch(url).then((response) => response.json());
}
