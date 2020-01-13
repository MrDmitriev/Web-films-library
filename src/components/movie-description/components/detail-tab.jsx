/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getMovie} from '../../../selectors/data.js';
import {getValuesListCol, convertMinutes} from '../../../utils/utils.js';

export const DetailTab = (props) => {
  const {movie = {}} = props;
  const {director = ``, starring = ``, run_time = null, genre = ``, released = null} = movie;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">{getValuesListCol(starring)}</span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{convertMinutes(run_time)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

DetailTab.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string,
  })
};

export default connect(
    (state) => ({
      movie: getMovie(state),
    })
)(DetailTab);

