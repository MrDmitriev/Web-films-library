import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {GenreList} from '../genre-list/genre-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import {ShowMoreButton} from '../show-more/show-more.jsx';
import {Logo} from '../logo/logo.jsx';
import {ActionCreator} from '../../reducers/data.js';
import PromoCard from '../promo-card/promo-card.jsx';

export class MainPage extends PureComponent {
  componentDidMount() {
    const {loadMoviePromo, loadMovies} = this.props;
    loadMovies();
    loadMoviePromo();
  }

  render() {
    return (
      <>
      <PromoCard />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <MoviesList />
        </section>

        <footer className="page-footer">
          <Logo />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
      </>
    );
  }
}

MainPage.propTypes = {
  loadMovies: PropTypes.func,
  loadMoviePromo: PropTypes.func,
};

export default connect(
    null,
    (dispatch) => ({
      loadMovies: () => dispatch(ActionCreator.loadMovies()),
      loadMoviePromo: () => dispatch(ActionCreator.loadMoviePromo()),
    })
)(MainPage);
