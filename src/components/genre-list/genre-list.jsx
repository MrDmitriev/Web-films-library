import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Genres} from '../../constants/constants.js';
import {GenreItem} from '../genre-item/genre-item.jsx';

export class GenreList extends PureComponent {
  render() {
    return (
      <ul className="catalog__genres-list">
        {Genres.map((item, i) => {
          return <GenreItem genre={item} key={i} />;
        })}
      </ul>
    );
  }
}
