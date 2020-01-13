import React, {Fragment} from 'react';

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

export const checkActiveStyle = (isActive) => isActive ? `--active` : ``;

export const isEven = (val) => val % 2 === 0;
export const isOdd = (val) => val % 2;

export const getValuesListRaw = (arr) => {
  return arr.map((item, i) => `${item}${i === arr.length - 1 ? `.` : `, `}`);
};

export const getValuesListCol = (arr) => {
  return arr.map((item, i) => {
    return (
      <Fragment key={i}>
        {`${item}${i === arr.length - 1 ? `.` : `, `}`}
        <br/>
      </Fragment>
    );
  });
};

export const convertMinutes = (value) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  const time = `${hours}h ${minutes}m`;

  return hours ? time : `---`;
};
