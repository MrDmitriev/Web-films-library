/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMovie} from '../../../selectors/data';
import {getValuesListRaw} from '../../../utils/utils.js';

export const OverviewTab = (props) => {
  const {movie = {}} = props;
  const {description = ``, director = ``, starring = [], rating = null, scores_count = null} = movie;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scores_count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getValuesListRaw(starring)}</strong></p>
      </div>
    </>
  );
};

OverviewTab.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.array,
    rating: PropTypes.number,
    scores_count: PropTypes.number
  })
};

export default connect(
    (state, ownProps) => ({
      movie: getMovie(state, ownProps.id),
    })
)(OverviewTab);
