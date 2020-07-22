import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../reducers/index.js';
import {getReviews} from '../../../selectors/data.js';
import {isEven} from '../../../utils/utils.js';
import ReviewItem from './review-item.jsx';

export const ReviewsTab = (props) => {
  useEffect(() => {
    props.loadReviews();
  }, []);

  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((item, i) => {
          return isEven(i) ? <ReviewItem review={item} key={i} /> : null;
        })}
      </div>
      <div className="movie-card__reviews-col">
        {reviews.map((item, i) => {
          return !isEven(i) ? <ReviewItem review={item} key={i} /> : null;
        })}
      </div>
    </div>
  );
};

ReviewsTab.propTypes = {
  loadReviews: PropTypes.func,
  reviews: PropTypes.array,
};

export default connect(
    (state) => ({
      reviews: getReviews(state),
    }),
    (dispatch) => ({
      loadReviews: () => dispatch(ActionCreator.loadMovieReviews()),
    })
)(ReviewsTab);
