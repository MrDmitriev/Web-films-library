import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getMovies} from '../../selectors/data.js';
import {MoviesItem} from '../movies-item/movies-item.jsx';
import {ShowMoreButton} from '../show-more/show-more.jsx';
import {filterMoviesByGenre, filterMoviesByPortion} from '../../utils/utils.js';
import {getGenre} from '../../selectors/settings.js';

export const MoviesList = (props) => {
  const {movies, genre} = props;
  const moviesByGenre = filterMoviesByGenre(genre, movies);
  const [currentRaw, incrementRaw] = useState(1);
  const portion = currentRaw * 4;
  const moviesList = filterMoviesByPortion(portion, moviesByGenre);
  const isHidden = moviesList.length >= moviesByGenre.length;

  const handleShowMoreClick = () => {
    return incrementRaw(currentRaw + 1);
  };

  return (
      <>
        <div className="catalog__movies-list">
          {moviesList.map((item, i) => <MoviesItem key = {i} item={item} />)}
        </div>
        {!isHidden && <ShowMoreButton onClick={handleShowMoreClick} />}
      </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  genre: PropTypes.string,
};

export default connect(
    (state) => ({
      movies: getMovies(state),
      genre: getGenre(state),
    })
)(MoviesList);
