/* eslint-disable camelcase */
import {getMovieId} from "../selectors/settings.js";

const initialState = {
  isFetching: false,
  movies: [],
  moviePromo: {},
  reviews: [],
};

const setMovies = (movies) => ({type: `SET_MOVIES`, payload: movies});
const setMoviePromo = (movie) => ({type: `SET_MOVIE_PROMO`, payload: movie});
const setIsFetching = (isfetching) => ({type: `SET_IS_FETCHING`, payload: isfetching});
const setReviews = (reviews) => ({type: `SET_REVIEWS`, payload: reviews});

const loadMovies = () => (dispatch, getState, api) => {
  return api.get(`/films`)
  .then((response) => {
    dispatch(setMovies(response.data));
  });
};

const loadMoviePromo = () => (dispatch, getState, api) => {
  return api.get(`/films/promo`)
  .then((response) => {
    dispatch(setMoviePromo(response.data));
  });
};

const loadMovieReviews = () => (dispatch, getState, api) => {
  const id = getMovieId(getState());
  return api.get(`/comments/${id}`)
  .then((response) => {
    dispatch(setReviews(response.data));
  });
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case `SET_MOVIES`:
      return {
        ...state,
        movies: action.payload
      };

    case `SET_MOVIE_PROMO`:
      return {
        ...state,
        moviePromo: action.payload
      };

    case `SET_IS_FETCHING`:
      return {
        ...state,
        isFetching: action.payload
      };

    case `SET_REVIEWS`:
      return {
        ...state,
        reviews: action.payload
      };
  }

  return state;
};

export default data;

export const ActionCreator = {
  setMovies,
  setMoviePromo,
  setIsFetching,
  loadMovies,
  loadMoviePromo,
  loadMovieReviews,
};
