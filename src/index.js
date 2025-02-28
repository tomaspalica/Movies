import { getMovies } from './api';
import { createFilmCards } from './JS/filmCards';

const showMovies = async () => {
  const movieList = await getMovies();
  createFilmCards(movieList);
};
showMovies();
