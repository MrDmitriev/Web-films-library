import {createSelector} from 'reselect';
import {includes, find, propEq} from 'ramda';
import {getMovieId} from './settings.js';

export const getMovies = (state) => state.data.movies;
export const getMoviePromo = (state) => state.data.moviePromo;
export const getIsfetching = (state) => state.data.isFetching;
export const getReviews = (state) => state.data.reviews;

export const getMovie = createSelector(
    getMovies,
    getMovieId,
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
