const BASE_URL = "https://api.themoviedb.org/3";
const myKey = "c3df5a3d5b89cc698ddf2b6481fb989c";
/*
https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
mediaType: all,movie,tv,person
timeWindow: day,week
*/

export default function getTrending(mediaType, timeWindow) {
  const url = `${BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${myKey}`;
  //console.log(url);
  return fetch(url).then((response) => response.json());
}
