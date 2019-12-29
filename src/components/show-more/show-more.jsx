import React from 'react';
import PropTypes from 'prop-types';

export const ShowMoreButton = (props) => {
  return (
    <div className="catalog__more">
      <button
        onClick={props.onClick}
        className="catalog__button"
        type="button">Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onClick: PropTypes.func
};
