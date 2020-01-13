import React from 'react';
import {values} from 'ramda';
import PropTypes from 'prop-types';
import {MovieDetailTabs} from '../../../constants/constants.js';
import {checkActiveStyle} from '../../../utils/utils.js';

export const DescriptionTabs = (props) => {
  const {onHandleTabClick, tab} = props;
  const tabs = values(MovieDetailTabs);
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          tabs.map((item, i) => {
            const isActive = tab === item;
            return (
              <li key={i} className={`movie-nav__item movie-nav__item${checkActiveStyle(isActive)}`}>
                <a className="movie-nav__link btn" name={item} onClick={onHandleTabClick}>{item}</a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

DescriptionTabs.propTypes = {
  onHandleTabClick: PropTypes.func,
  tab: PropTypes.string
};
