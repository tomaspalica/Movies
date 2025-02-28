import 'dotenv/config';
const MY_TOKEN = process.env.BEARER_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const POPULAR_LIST_URL = BASE_URL + '/movie/popular?';
export async function getMovies(page = 1) {
  console.log(MY_TOKEN);
  const response = await fetch(`${POPULAR_LIST_URL}page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${MY_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error('Request failed');
  }
  const data = await response.json();
  console.log(data);
  return data;
}
