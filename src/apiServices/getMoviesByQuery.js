const BASE_URL = "https://api.themoviedb.org/3";
const myKey = "c3df5a3d5b89cc698ddf2b6481fb989c";
/*
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
*/

export default function getMoviesByQuery(query) {
  const url = `${BASE_URL}/search/movie/?query=${query}&api_key=${myKey}`;
  return fetch(url).then((response) => response.json());
}
