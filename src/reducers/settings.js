const initialState = {
  genre: `All genres`,
  movieId: null,
};

const setGenre = (genre) => ({type: `SET_GENRE`, payload: genre});
const setMovieId = (id) => ({type: `SET_MOVIE_ID`, payload: id});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return {
        ...state,
        genre: action.payload
      };

    case `SET_MOVIE_ID`:
      return {
        ...state,
        movieId: action.payload
      };
  }

  return state;
};

export const ActionCreator = {
  setGenre,
  setMovieId,
};

export default settings;
