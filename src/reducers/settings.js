const initialState = {
  genre: `All genres`,
};

const setGenre = (genre) => ({type: `SET_GENRE`, payload: genre});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return {
        ...state,
        genre: action.payload
      };
  }

  return state;
};

export const ActionCreator = {
  setGenre
};

export default settings;
