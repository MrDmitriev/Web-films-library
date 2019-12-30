import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/index.js';

export class GenreItem extends PureComponent {
  handleClickGenre = (e) => {
    const {setGenre} = this.props;
    const genre = e.currentTarget.id;
    return setGenre(genre);
  }

  render() {
    const {genre, isActive} = this.props;
    const type = isActive ? `active` : ``;
    return (
      <li className={`catalog__genres-item catalog__genres-item--${type}`}>
        <a
          href="#"
          className="catalog__genres-link"
          id={genre}
          onClick={this.handleClickGenre}
        >{genre}</a>
      </li>
    );
  }
}

GenreItem.propTypes = {
  genre: PropTypes.string,
  isActive: PropTypes.bool,
  setGenre: PropTypes.func,
};

export default connect(
    null,
    (dispatch) => ({
      setGenre: (genre) => dispatch(ActionCreator.setGenre(genre))
    })
)(GenreItem);
