import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {DEFAULT_GENRE} from '../../constants/constants.js';
import GenreItem from '../genre-item/genre-item.jsx';
import {getGenres} from '../../selectors/data.js';
import {getGenre} from '../../selectors/settings.js';

export class GenreList extends PureComponent {
  render() {
    const {genres, currentGenre} = this.props;
    return (
      <ul className="catalog__genres-list">
        <GenreItem genre={DEFAULT_GENRE} key={DEFAULT_GENRE} isActive={currentGenre === DEFAULT_GENRE}/>

        {genres.map((item, i) => <GenreItem genre={item} key={i} isActive={currentGenre === item} />)}
      </ul>
    );
  }
}

GenreList.propTypes = {
  genres: PropTypes.array,
  currentGenre: PropTypes.string,
};

export default connect(
    (state) => ({
      genres: getGenres(state),
      currentGenre: getGenre(state),
    })
)(GenreList);
