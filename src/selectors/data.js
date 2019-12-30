import {createSelector} from 'reselect';
import { includes } from 'ramda';

export const getMovies = (state) => state.data.movies;
export const getMoviePromo = (state) => state.data.moviePromo;

export const getGenres = createSelector(
    getMovies,
    (movies) => {
      let genres = [];
      movies.forEach((item) => {
        const newGenre = item.genre;
        return !includes(newGenre, genres) && genres.push(newGenre);
      });

      return genres;
    }
);
