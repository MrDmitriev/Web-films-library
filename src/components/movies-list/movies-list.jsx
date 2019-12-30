import React, {useState} from 'react';
import {slice} from 'ramda';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getMovies} from '../../selectors/data.js';
import {MoviesItem} from '../movies-item/movies-item.jsx';
import {ShowMoreButton} from '../show-more/show-more.jsx';

export const MoviesList = (props) => {
  const {movies} = props;
  const [currentRaw, incrementRaw] = useState(1);
  const load = currentRaw * 4;
  const movieList = slice(0, load, movies);
  const isHidden = movieList.length >= movies.length;

  return (
      <>
        <div className="catalog__movies-list">
          {movieList.map((item, i) => <MoviesItem key = {i} item={item} />)}
        </div>
        {!isHidden && <ShowMoreButton onClick={() => incrementRaw(currentRaw + 1)} />}
      </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array
};

export default connect(
    (state) => ({
      movies: getMovies(state)
    })
)(MoviesList);
