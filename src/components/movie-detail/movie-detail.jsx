/* eslint-disable camelcase */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Logo} from '../logo/logo.jsx';
import {getMovie} from '../../selectors/data.js';
import {ActionCreator} from '../../reducers/index.js';
import {formatValue} from '../../utils/utils.js';
import ComponentLoader from '../atoms/component-loader/component-loader.jsx';

export class MovieDetail extends PureComponent {
  componentDidMount() {
    this.props.loadMovies();
  }
  render() {
    const {movie = {}} = this.props;
    const {name = ``, genre = ``, released = ``, poster_image = ``, background_image = ``} = movie;
    return (
      <ComponentLoader>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={formatValue(background_image)} alt={formatValue(name)} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <Logo />

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
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

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">Wes Andreson</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value"></span>
                    </p>
                  </div>

                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">1h 39m</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">Comedy</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">2014</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ComponentLoader>
    );
  }
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    poster_image: PropTypes.string,
    background_image: PropTypes.string,
    released: PropTypes.number
  }),
  loadMovies: PropTypes.func
};

export default connect(
    (state, ownProps) => ({
      movie: getMovie(state, ownProps.match.params.id),
    }),
    (dispatch) => ({
      loadMovies: () => dispatch(ActionCreator.loadMovies()),
    })
)(MovieDetail);
