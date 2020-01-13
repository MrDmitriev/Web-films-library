import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = (props) => {
  const {review = {}} = props;
  const {comment = ``, date = ``, rating = 0, user = {}} = review;
  const {name = ``} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};


ReviewItem.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string
    })
  })
};


export default ReviewItem;
