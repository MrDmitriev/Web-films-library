import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class GenreItem extends PureComponent {
  render() {
    const {genre} = this.props;
    return (
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  }
}

GenreItem.propTypes = {
  genre: PropTypes.string
};
