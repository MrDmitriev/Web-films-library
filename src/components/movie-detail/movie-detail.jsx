/* eslint-disable camelcase */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Logo} from '../logo/logo.jsx';
import {getMovie} from '../../selectors/data.js';
import {ActionCreator} from '../../reducers/index.js';
import {formatValue} from '../../utils/utils.js';
import {MovieDescription} from '../movie-description/movie-description.jsx';
import Login from '../login/login.jsx';

export const MovieDetail = (props) => {
  useEffect(() => {
    const {loadMovies, setMovieId, match} = props;

    loadMovies();
    setMovieId(Number(match.params.id));

  }, []);

  const {movie = {}} = props;
  const {name = ``, genre = ``, released = ``, poster_image = ``, background_image = ``} = movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={formatValue(background_image)} alt={formatValue(name)} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo />

          <Login />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{formatValue(name)}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{formatValue(genre)}</span>
              <span className="movie-card__year">{formatValue(released)}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={formatValue(poster_image)} alt={formatValue(name)} width="218" height="327" />
          </div>

          <MovieDescription />
        </div>
      </div>
    </section>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    poster_image: PropTypes.string,
    background_image: PropTypes.string,
    released: PropTypes.number
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  loadMovies: PropTypes.func,
  setMovieId: PropTypes.func,
};

export default connect(
    (state) => ({
      movie: getMovie(state),
    }),
    (dispatch) => ({
      loadMovies: () => dispatch(ActionCreator.loadMovies()),
      setMovieId: (id) => dispatch(ActionCreator.setMovieId(id)),
    })
)(MovieDetail);
