import {createSelector} from 'reselect';
import { includes, find, propEq } from 'ramda';

export const getMovies = (state) => state.data.movies;
export const getMoviePromo = (state) => state.data.moviePromo;
export const getIsfetching = (state) => state.data.isFetching;

export const getMovie = createSelector(
    getMovies,
    (state, id) => id,
    (movies, id) => {
      return find(propEq(`id`, Number(id)), movies);
    }
);

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
