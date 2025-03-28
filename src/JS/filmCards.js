import { getMovies } from '../api';
const filmList = document.querySelector('.filmList');

export async function createFilmCards(film) {
  const ourList = await getMovies();
  const markup = `<li class="film-card">
  <img
    class="film-card-img"
    src="https://image.tmdb.org/t/p/w200${film.poster_path}"
    alt=""
  />
  <h3>${film.original_title}</h3>
  <div class="film-card-info">
    <p>Genres | film.release_date.split('-')[0]</p>
  </div>
</li>`;

  const movieCard = film.results.map(
    el => `<li class="film-card">
    <div class="film-card_img-wrapper">
          <img
            class="film-card_img"
            src="https://image.tmdb.org/t/p/w200${el.poster_path}"
            alt=""
          />
          </div> <div class="film-card_info">
          <h3>${el.original_title}</h3>
          <p>Genres | ${el.release_date.split('-')[0]}</p>
          </div>
        </li>`
  );
  filmList.innerHTML = movieCard.join(' ');
}
