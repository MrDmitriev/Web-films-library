import {slice} from "ramda";
import {isNilOrEmptyString} from 'ramda-extension';
import {DEFAULT_GENRE} from "../constants/constants.js";

export const filterMoviesByGenre = (genre, movies) => {
  const isDefault = genre === DEFAULT_GENRE;
  return isDefault ? movies : movies.filter((item) => item.genre === genre);
};

export const filterMoviesByPortion = (portion, movies) => {
  return movies ? slice(0, portion, movies) : [];
};

export const formatValue = (value) => {
  return isNilOrEmptyString(value) ? `---` : value;
};
