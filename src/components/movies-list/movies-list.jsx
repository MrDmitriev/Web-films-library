import React, {useState} from 'react';
import {slice} from 'ramda';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getMovies} from '../../selectors/data.js';
import {MoviesItem} from '../movies-item/movies-item.jsx';
import {ShowMoreButton} from '../show-more/show-more.jsx';

export const MoviesList = (props) => {
  const {movies} = props;
  const [showMore, toggleShow] = useState(false);
  const movieList = showMore ? movies : slice(0, 20, movies);
  return (
      <>
        <div className="catalog__movies-list">
          {movieList.map((item, i) => <MoviesItem key = {i} item={item} />)}
        </div>
        {!showMore && <ShowMoreButton onClick={() => toggleShow(!showMore)} />}
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
